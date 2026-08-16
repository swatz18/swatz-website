import formidable from "formidable";
import { generateReferenceId } from "../lib/reference.js";
import {
    createOrderFolder,
    uploadProductImages
} from "../lib/driveService.js";
import { saveOrder } from "../lib/orderService.js";
import { ORDER_RESULT } from "../lib/orderResult.js";
import { ORDER_MESSAGES } from "../lib/messages.js";
import { rollbackOrder } from "../lib/rollbackService.js";

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(req, res) {

    // CORS
    const allowedOrigins = [
    "https://swatz-website.vercel.app",
    "https://swatz18.github.io",
    "http://localhost:3000"
    ];

    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader(
            "Access-Control-Allow-Origin",
            origin
        );
    }

    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, OPTIONS"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );

    // Handle browser preflight request
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {

        return res.status(405).json({
            success: false,
            message: "Method Not Allowed"
        });

    }

    const form = formidable({

        multiples: true,
        keepExtensions: true

    });

    form.parse(req, async (err, fields, files) => {

        if (err) {

            console.error(err);

            return res.status(500).json({

                success: false,
                message: "Unable to process uploaded files."

            });

        }
        let driveFolder = null;
        try {
            
            

            const order = JSON.parse(fields.order[0]);

            const referenceId = generateReferenceId();

            console.log("=================================");
            console.log("Reference :", referenceId);

            // Create Drive folder

            driveFolder = await createOrderFolder(referenceId);

            console.log("✅ Order folder created");

            // Upload every product photo

            const uploadResult = await uploadProductImages(

                driveFolder.folderId,

                order.items,

                files

            );

            const photoUploadFailed = !uploadResult.uploaded;

            console.log("✅ All images uploaded");

            // Save Drive URL into order

            order.driveFolder = driveFolder.folderUrl;
            order.photoUploadStatus = photoUploadFailed
                ? "Pending via WhatsApp"
                : "Uploaded";

            // Save Google Sheets

            await saveOrder({

                referenceId,

                ...order

            });

            console.log("✅ Google Sheets updated");

            console.log("=================================");

            return res.status(200).json({

                success: true,

                result: photoUploadFailed
                    ? ORDER_RESULT.PHOTO_UPLOAD_FAILED
                    : ORDER_RESULT.SUCCESS,

                photoUploadFailed,

                referenceId

            });

        }

        catch (error) {

            console.error("=================================");
            console.error("❌ ORDER FAILED");
            console.error("Error:", error);
            console.error("Message:", error?.message);
            console.error("Stack:", error?.stack);
            console.error("=================================");

    

            if (driveFolder) {

                try {

                    await rollbackOrder(driveFolder.folderId);

                } catch (rollbackError) {

                    console.error("Rollback failed:", rollbackError);

                }

            }

            return res.status(500).json({

                success: false,

                result: ORDER_RESULT.ORDER_FAILED,

                photoUploadFailed: false,

                message: ORDER_MESSAGES.ORDER_FAILED

            });

        }

    });

}