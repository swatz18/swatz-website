export async function saveOrder(order) {

    try {

        // =====================================================
        // STEP 1
        // Create order + Drive folder
        // =====================================================

        const orderWithoutFiles = {

            ...order,

            items: order.items.map(item => ({

                ...item,

                photos:
                    Array.isArray(item.photos)
                        ? item.photos.length
                        : item.photos || 0

            }))

        };


        const createFormData =
            new FormData();


        createFormData.append(
            "order",
            JSON.stringify(
                orderWithoutFiles
            )
        );


        const createResponse =
            await fetch(
                "/api/orders",
                {
                    method: "POST",

                    body:
                        createFormData
                }
            );


        const createResult =
            await readJsonResponse(
                createResponse
            );


        if (
            !createResponse.ok ||
            !createResult.success
        ) {

            return createResult;

        }


        const referenceId =
            createResult.referenceId;

        const folderId =
            createResult.folderId;

        const folderUrl =
            createResult.folderUrl;


        console.log(
            "✅ Order created:",
            referenceId
        );


        // =====================================================
        // STEP 2
        // Upload photos individually
        // =====================================================

        let photoUploadFailed =
            false;


        for (
            let itemIndex = 0;
            itemIndex < order.items.length;
            itemIndex++
        ) {

            const item =
                order.items[itemIndex];


            if (
                !Array.isArray(item.photos)
            ) {

                continue;

            }


            for (
                let photoIndex = 0;
                photoIndex < item.photos.length;
                photoIndex++
            ) {

                const file =
                    item.photos[photoIndex];


                try {

                    console.log(
                        `Uploading photo ` +
                        `${photoIndex + 1} ` +
                        `for item ` +
                        `${itemIndex + 1}`
                    );


                    const uploadFile =
                        await preparePhotoForUpload(
                            file
                        );


                    const formData =
                        new FormData();


                    formData.append(
                        "folderId",
                        folderId
                    );


                    formData.append(
                        "itemIndex",
                        String(itemIndex)
                    );


                    formData.append(
                        "productName",
                        item.title
                    );


                    formData.append(
                        "photoIndex",
                        String(photoIndex)
                    );


                    formData.append(
                        "photo",
                        uploadFile,
                        uploadFile.name
                    );


                    const uploadResponse =
                        await fetch(
                            "/api/orders/upload",
                            {
                                method: "POST",

                                body:
                                    formData
                            }
                        );


                    const uploadResult =
                        await readJsonResponse(
                            uploadResponse
                        );


                    if (
                        !uploadResponse.ok ||
                        !uploadResult.success
                    ) {

                        console.error(
                            "❌ Photo upload failed:",
                            uploadResult
                        );

                        photoUploadFailed =
                            true;

                    } else {

                        console.log(
                            "✅ Photo uploaded"
                        );

                    }


                } catch (error) {

                    console.error(
                        "❌ Photo upload error:",
                        error
                    );

                    photoUploadFailed =
                        true;

                }

            }

        }


        // =====================================================
        // STEP 3
        // Finalize + Google Sheets
        // =====================================================

        const finalizeResponse =
            await fetch(
                "/api/orders/finalize",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            referenceId,

                            folderUrl,

                            order:
                                orderWithoutFiles,

                            photoUploadStatus:
                                photoUploadFailed
                                    ? "Pending via WhatsApp"
                                    : "Uploaded"

                        })
                }
            );


        const finalizeResult =
            await readJsonResponse(
                finalizeResponse
            );


        if (
            !finalizeResponse.ok ||
            !finalizeResult.success
        ) {

            return {

                success: false,

                error:
                    finalizeResult.message ||
                    "Unable to finalize order."

            };

        }


        // =====================================================
        // STEP 4
        // Return existing Cart.jsx contract
        // =====================================================

        return {

            success: true,

            result:
                photoUploadFailed
                    ? "PHOTO_UPLOAD_FAILED"
                    : "SUCCESS",

            photoUploadFailed,

            referenceId

        };


    } catch (error) {

        console.error(
            "❌ Order processing failed:",
            error
        );


        return {

            success: false,

            error:
                error.message

        };

    }

}


/* =========================================================
   Safe JSON reader
   ========================================================= */

async function readJsonResponse(response) {

    const text =
        await response.text();


    if (!text) {

        return {

            success: false,

            message:
                `Server returned ${response.status}`

        };

    }


    try {

        return JSON.parse(text);

    } catch (error) {

        console.error(
            "Invalid JSON response:",
            text
        );

        return {

            success: false,

            message:
                `Server returned ${response.status}`

        };

    }

}


/* =========================================================
   Prepare photo
   ========================================================= */

async function preparePhotoForUpload(file) {

    const MAX_SIZE =
        3.5 * 1024 * 1024;


    /*
     * Don't touch normal-sized images.
     */

    if (
        file.size <= MAX_SIZE
    ) {

        return file;

    }


    console.log(
        "Large photo detected:",
        file.name,
        file.size
    );


    return compressImage(file);

}


/* =========================================================
   Compress large photo
   ========================================================= */

function compressImage(file) {

    return new Promise(
        (resolve, reject) => {

            const image =
                new Image();

            const objectUrl =
                URL.createObjectURL(
                    file
                );


            image.onload = () => {

                URL.revokeObjectURL(
                    objectUrl
                );


                const MAX_DIMENSION =
                    2400;


                let width =
                    image.naturalWidth;

                let height =
                    image.naturalHeight;


                if (
                    width > MAX_DIMENSION ||
                    height > MAX_DIMENSION
                ) {

                    const scale =
                        Math.min(
                            MAX_DIMENSION /
                                width,

                            MAX_DIMENSION /
                                height
                        );


                    width =
                        Math.round(
                            width * scale
                        );

                    height =
                        Math.round(
                            height * scale
                        );

                }


                const canvas =
                    document.createElement(
                        "canvas"
                    );


                canvas.width =
                    width;

                canvas.height =
                    height;


                const context =
                    canvas.getContext(
                        "2d"
                    );


                context.drawImage(
                    image,
                    0,
                    0,
                    width,
                    height
                );


                canvas.toBlob(
                    blob => {

                        if (!blob) {

                            reject(
                                new Error(
                                    "Unable to compress image."
                                )
                            );

                            return;

                        }


                        const name =
                            file.name.replace(
                                /\.[^/.]+$/,
                                ""
                            );


                        const compressedFile =
                            new File(
                                [blob],

                                `${name}.jpg`,

                                {
                                    type:
                                        "image/jpeg"
                                }
                            );


                        resolve(
                            compressedFile
                        );

                    },

                    "image/jpeg",

                    0.82
                );

            };


            image.onerror = () => {

                URL.revokeObjectURL(
                    objectUrl
                );


                reject(
                    new Error(
                        "Unable to read image."
                    )
                );

            };


            image.src =
                objectUrl;

        }
    );

}