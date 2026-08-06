import { google } from "googleapis";
import { getGoogleDriveClient } from "./googleDriveOAuth.js";
import { DRIVE } from "./constants.js";
import fs from "fs";
import path from "path";

async function getDrive() {

    const auth = await getGoogleDriveClient();

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

export async function createProductFolder(orderFolderId, index, productName) {

    const drive = await getDrive();

    const folderName = `${String(index + 1).padStart(3, "0")}_${productName}`;

    const folder = await findOrCreateFolder(

        drive,

        folderName,

        orderFolderId

    );

    return folder.id;

}

export async function uploadImage(productFolderId, file, photoNumber) {

    const drive = await getDrive();

    const extension = path.extname(file.originalFilename || "") || ".jpg";

    const photoName = `Photo-${photoNumber}${extension}`;

    const uploaded = await drive.files.create({

        requestBody: {

            name: photoName,

            parents: [productFolderId]

        },

        media: {

            mimeType: file.mimetype,

            body: fs.createReadStream(file.filepath)

        },

        fields: "id,name"

    });

    return uploaded.data;

}

export async function uploadProductImages(
    orderFolderId,
    items,
    files
) {

    let uploaded = true;

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {

        const productFolderId = await createProductFolder(
            orderFolderId,
            itemIndex,
            items[itemIndex].title
        );

        for (let photoIndex = 0; photoIndex < items[itemIndex].photos; photoIndex++) {

            const key = `photo_${itemIndex}_${photoIndex}`;

            if (!files[key]) {

                continue;

            }

            try {

                await uploadImage(
                    productFolderId,
                    files[key][0],
                    photoIndex + 1
                );

            } catch (error) {

                console.error(
                    `Photo upload failed (${key})`,
                    error
                );

                uploaded = false;

            }

        }

    }

    return {

        uploaded

    };

}