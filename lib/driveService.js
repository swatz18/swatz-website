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

export async function uploadImage(
    productFolderId,
    file,
    photoNumber
) {

    console.log("========== UPLOAD IMAGE ==========");

    console.log("Folder:", productFolderId);

    console.log("Photo number:", photoNumber);

    console.log("Filename:", file.originalFilename);

    console.log("Filepath:", file.filepath);

    console.log("Mimetype:", file.mimetype);

    console.log("Size:", file.size);


    if (!file.filepath) {

        throw new Error(
            "Uploaded file does not have a filepath"
        );

    }


    if (!fs.existsSync(file.filepath)) {

        throw new Error(
            `File does not exist: ${file.filepath}`
        );

    }


    const drive = await getDrive();

    const extension =
        path.extname(
            file.originalFilename || ""
        ) || ".jpg";


    const photoName =
        `Photo-${photoNumber}${extension}`;


    console.log(
        "Uploading to Google Drive:",
        photoName
    );


    try {

        const uploaded =
            await drive.files.create({

                requestBody: {

                    name: photoName,

                    parents: [productFolderId]

                },

                media: {

                    mimeType: file.mimetype,

                    body: fs.createReadStream(
                        file.filepath
                    )

                },

                fields: "id,name"

            });


        console.log(
            "✅ Google Drive upload successful:",
            uploaded.data
        );


        return uploaded.data;


    } catch (error) {

        console.error(
            "❌ Google Drive upload error"
        );

        console.error(
            "Message:",
            error?.message
        );

        console.error(
            "Code:",
            error?.code
        );

        console.error(
            "Response:",
            error?.response?.data
        );

        throw error;

    }

}

export async function uploadProductImages(
    orderFolderId,
    items,
    files
) {

    let uploaded = true;

    console.log("========== PHOTO UPLOAD DEBUG ==========");

    console.log("Order Folder ID:", orderFolderId);

    console.log(
        "Items:",
        JSON.stringify(items, null, 2)
    );

    console.log(
        "Available file keys:",
        Object.keys(files || {})
    );


    for (
        let itemIndex = 0;
        itemIndex < items.length;
        itemIndex++
    ) {

        const item = items[itemIndex];

        console.log("--------------------------------------");

        console.log(
            `Processing product ${itemIndex}:`,
            item.title
        );

        console.log(
            "Expected photos:",
            item.photos
        );


        const productFolderId = await createProductFolder(
            orderFolderId,
            itemIndex,
            item.title
        );

        console.log(
            "Product folder created:",
            productFolderId
        );


        for (
            let photoIndex = 0;
            photoIndex < item.photos;
            photoIndex++
        ) {

            const key =
                `photo_${itemIndex}_${photoIndex}`;

            console.log(
                `Looking for file: ${key}`
            );


            if (!files[key]) {

                console.log(
                    `⚠️ File not found: ${key}`
                );

                continue;

            }


            console.log(
                `✅ File found: ${key}`
            );

            console.log(
                "File:",
                {
                    originalFilename:
                        files[key][0]?.originalFilename,

                    filepath:
                        files[key][0]?.filepath,

                    mimetype:
                        files[key][0]?.mimetype,

                    size:
                        files[key][0]?.size
                }
            );


            try {

                const result = await uploadImage(
                    productFolderId,
                    files[key][0],
                    photoIndex + 1
                );

                console.log(
                    `✅ Uploaded ${key}:`,
                    result
                );

            } catch (error) {

                console.error(
                    `❌ PHOTO UPLOAD FAILED: ${key}`
                );

                console.error(
                    "Error message:",
                    error?.message
                );

                console.error(
                    "Error code:",
                    error?.code
                );

                console.error(
                    "Error status:",
                    error?.response?.status
                );

                console.error(
                    "Google error:",
                    error?.response?.data
                );

                console.error(
                    "Full error:",
                    error
                );

                uploaded = false;

            }

        }

    }

    console.log(
        "========== PHOTO UPLOAD COMPLETE =========="
    );

    console.log(
        "Upload successful:",
        uploaded
    );


    return {

        uploaded

    };

}