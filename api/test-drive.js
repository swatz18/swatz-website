import { createOrderFolder } from "../lib/driveService.js";

export default async function handler(req, res) {

    try {

        const folder = await createOrderFolder("TEST-001");

        res.status(200).json(folder);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            error: error.message

        });

    }

}