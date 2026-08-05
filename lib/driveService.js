import { google } from "googleapis";
import { getGoogleClient } from "./google.js";
import { DRIVE } from "./constants.js";

async function getDrive() {

    const auth = await getGoogleClient();

    return google.drive({

        version: "v3",
        auth

    });

}

async function findOrCreateFolder(drive, folderName, parentId = null) {

    let query =
        `mimeType='application/vnd.google-apps.folder' and ` +
        `name='${folderName}' and trashed=false`;

    if (parentId) {

        query += ` and '${parentId}' in parents`;

    }

    const response = await drive.files.list({

        q: query,

        fields: "files(id, name)"

    });

    if (response.data.files.length > 0) {

        return response.data.files[0];

    }

    const folder = await drive.files.create({

        requestBody: {

            name: folderName,

            mimeType: "application/vnd.google-apps.folder",

            parents: parentId ? [parentId] : undefined

        },

        fields: "id, name"

    });

    return folder.data;

}

export async function createOrderFolder(referenceId) {

    const drive = await getDrive();

    const now = new Date();

    const yearName = now.getFullYear().toString();

    const monthName = now.toLocaleString("en-US", {

        month: "long"

    });

    const rootFolder = {

        id: DRIVE.ROOT_FOLDER_ID

    };

    const yearFolder = await findOrCreateFolder(
        drive,
        yearName,
        rootFolder.id
    );

    const monthFolder = await findOrCreateFolder(
        drive,
        monthName,
        yearFolder.id
    );

    const orderFolder = await findOrCreateFolder(
        drive,
        referenceId,
        monthFolder.id
    );

    return {

        folderId: orderFolder.id,

        folderUrl: `https://drive.google.com/drive/folders/${orderFolder.id}`

    };

}