import { saveOrder } from "../../lib/orderService.js";

import {
    ORDER_RESULT
} from "../../lib/orderResult.js";

import {
    ORDER_MESSAGES
} from "../../lib/messages.js";

export default async function handler(req, res) {

    // ---------------------------------------------------------
    // METHOD
    // ---------------------------------------------------------

    if (req.method !== "POST") {

        return res.status(405).json({

            success: false,

            message:
                "Method Not Allowed"

        });

    }


    try {

        const {
            referenceId,
            folderUrl,
            order,
            photoUploadStatus
        } = req.body;


        // -----------------------------------------------------
        // Validate
        // -----------------------------------------------------

        if (!referenceId) {

            return res.status(400).json({

                success: false,

                message:
                    "Missing reference ID."

            });

        }


        if (!order) {

            return res.status(400).json({

                success: false,

                message:
                    "Missing order information."

            });

        }


        // -----------------------------------------------------
        // Build final order
        // -----------------------------------------------------

        const finalOrder = {

            referenceId,

            ...order,

            driveFolder:
                folderUrl || "",

            photoUploadStatus:
                photoUploadStatus ||
                "Uploaded"

        };


        console.log(
            "================================="
        );

        console.log(
            "Finalizing order:",
            referenceId
        );


        // -----------------------------------------------------
        // Save Google Sheets
        // -----------------------------------------------------

        await saveOrder(
            finalOrder
        );


        console.log(
            "✅ Google Sheets updated"
        );

        console.log(
            "================================="
        );


        const photoUploadFailed =
            photoUploadStatus ===
            "Pending via WhatsApp";


        // -----------------------------------------------------
        // SAME RESPONSE CONTRACT
        // Cart.jsx already expects this.
        // -----------------------------------------------------

        return res.status(200).json({

            success: true,

            result:
                photoUploadFailed
                    ? ORDER_RESULT.PHOTO_UPLOAD_FAILED
                    : ORDER_RESULT.SUCCESS,

            photoUploadFailed,

            referenceId

        });


    } catch (error) {

        console.error(
            "================================="
        );

        console.error(
            "❌ ORDER FINALIZATION FAILED"
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
            "Stack:",
            error?.stack
        );

        console.error(
            "================================="
        );


        return res.status(500).json({

            success: false,

            result:
                ORDER_RESULT.ORDER_FAILED,

            photoUploadFailed: false,

            message:
                ORDER_MESSAGES.ORDER_FAILED

        });

    }

}