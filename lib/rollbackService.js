import { google } from "googleapis";
import { getGoogleDriveClient } from "./googleDriveOAuth.js";

async function getDrive() {

    const auth = await getGoogleDriveClient();

    return google.drive({

        version: "v3",
        auth

    });

}

export async function rollbackOrder(folderId) {

    if (!folderId) {

        return;

    }

    const drive = await getDrive();

    await drive.files.delete({

        fileId: folderId

    });

    console.log(`🗑️ Rolled back order folder: ${folderId}`);

}