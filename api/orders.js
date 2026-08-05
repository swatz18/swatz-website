import { saveOrder } from "../lib/orderService.js";
import { generateReferenceId } from "../lib/reference.js";


export default async function handler(req, res) {

    try {

        const referenceId = generateReferenceId();

        await saveOrder({

            referenceId,

            ...req.body

        });

        return res.status(200).json({

            success: true,

            referenceId

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            error: error.message

        });

    }

}