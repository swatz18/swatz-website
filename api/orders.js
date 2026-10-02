import formidable from "formidable";
import { generateReferenceId } from "../lib/reference.js";
import { createOrderFolder } from "../lib/driveService.js";

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(req, res) {

    // ---------------------------------------------------------
    // CORS
    // ---------------------------------------------------------

    const allowedOrigins = [
        "https://swatz.in",
        "https://www.swatz.in",
        "https://swatz-website.vercel.app",
        "https://swatz18.github.io",
        "http://localhost:3000",
        "http://localhost:5173"
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


    // ---------------------------------------------------------
    // OPTIONS
    // ---------------------------------------------------------

    if (req.method === "OPTIONS") {

        return res.status(200).end();

    }


    // ---------------------------------------------------------
    // METHOD CHECK
    // ---------------------------------------------------------

    if (req.method !== "POST") {

        return res.status(405).json({

            success: false,

            message: "Method Not Allowed"

        });

    }


    // ---------------------------------------------------------
    // FORM PARSER
    // ---------------------------------------------------------

    const form = formidable({

        multiples: false

    });


    form.parse(
        req,
        async (err, fields) => {

            if (err) {

                console.error(
                    "❌ Order form parsing failed:",
                    err
                );

                return res.status(500).json({

                    success: false,

                    message:
                        "Unable to process order."

                });

            }


            try {

                // -------------------------------------------------
                // Read order
                // -------------------------------------------------

                const order =
                    JSON.parse(
                        fields.order?.[0]
                    );


                if (!order) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Order information is missing."

                    });

                }


                // -------------------------------------------------
                // Generate reference
                // -------------------------------------------------

                const referenceId =
                    generateReferenceId();


                console.log(
                    "================================="
                );

                console.log(
                    "Creating order:",
                    referenceId
                );


                // -------------------------------------------------
                // Create Drive folder
                // -------------------------------------------------

                const driveFolder =
                    await createOrderFolder(
                        referenceId
                    );


                console.log(
                    "✅ Order folder created"
                );

                console.log(
                    "Folder ID:",
                    driveFolder.folderId
                );


                // -------------------------------------------------
                // Return folder information
                //
                // IMPORTANT:
                // Google Sheets is NOT saved here.
                // Photos are uploaded first.
                // -------------------------------------------------

                return res.status(200).json({

                    success: true,

                    referenceId,

                    folderId:
                        driveFolder.folderId,

                    folderUrl:
                        driveFolder.folderUrl

                });


            } catch (error) {

                console.error(
                    "================================="
                );

                console.error(
                    "❌ ORDER CREATION FAILED"
                );

                console.error(
                    "Error:",
                    error
                );

                console.error(
                    "Message:",
                    error?.message
                );

                console.error(
                    "================================="
                );


                return res.status(500).json({

                    success: false,

                    message:
                        "Unable to create order."

                });

            }

        }
    );

}