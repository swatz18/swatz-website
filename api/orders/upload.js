import formidable from "formidable";
import {
    createProductFolder,
    uploadImage
} from "../../lib/driveService.js";

export const config = {
    api: {
        bodyParser: false
    }
};

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


    // ---------------------------------------------------------
    // FORM PARSER
    // ---------------------------------------------------------

    const form = formidable({

        multiples: false,

        keepExtensions: true

    });


    form.parse(
        req,
        async (err, fields, files) => {

            if (err) {

                console.error(
                    "❌ Photo form parsing failed:",
                    err
                );

                return res.status(500).json({

                    success: false,

                    uploaded: false,

                    message:
                        "Unable to process photo."

                });

            }


            try {

                // -------------------------------------------------
                // Read fields
                // -------------------------------------------------

                const folderId =
                    fields.folderId?.[0];

                const itemIndex =
                    Number(
                        fields.itemIndex?.[0]
                    );

                const productName =
                    fields.productName?.[0];

                const photoIndex =
                    Number(
                        fields.photoIndex?.[0]
                    );

                const photo =
                    files.photo?.[0];


                // -------------------------------------------------
                // Validate
                // -------------------------------------------------

                if (!folderId) {

                    return res.status(400).json({

                        success: false,

                        uploaded: false,

                        message:
                            "Missing order folder."

                    });

                }


                if (
                    !Number.isInteger(itemIndex) ||
                    itemIndex < 0
                ) {

                    return res.status(400).json({

                        success: false,

                        uploaded: false,

                        message:
                            "Invalid item index."

                    });

                }


                if (!productName) {

                    return res.status(400).json({

                        success: false,

                        uploaded: false,

                        message:
                            "Missing product name."

                    });

                }


                if (
                    !Number.isInteger(photoIndex) ||
                    photoIndex < 0
                ) {

                    return res.status(400).json({

                        success: false,

                        uploaded: false,

                        message:
                            "Invalid photo index."

                    });

                }


                if (!photo) {

                    return res.status(400).json({

                        success: false,

                        uploaded: false,

                        message:
                            "Photo not found."

                    });

                }


                console.log(
                    "================================="
                );

                console.log(
                    "Uploading photo"
                );

                console.log(
                    "Order Folder:",
                    folderId
                );

                console.log(
                    "Product:",
                    productName
                );

                console.log(
                    "Item Index:",
                    itemIndex
                );

                console.log(
                    "Photo Index:",
                    photoIndex
                );

                console.log(
                    "File:",
                    photo.originalFilename
                );

                console.log(
                    "Size:",
                    photo.size
                );


                // -------------------------------------------------
                // Create / find product folder
                //
                // Uses your EXISTING function.
                // -------------------------------------------------

                const productFolderId =
                    await createProductFolder(
                        folderId,
                        itemIndex,
                        productName
                    );


                // -------------------------------------------------
                // Upload ONE photo
                //
                // Uses your EXISTING function.
                // -------------------------------------------------

                const uploaded =
                    await uploadImage(
                        productFolderId,
                        photo,
                        photoIndex + 1
                    );


                console.log(
                    "✅ Photo uploaded:",
                    uploaded
                );


                return res.status(200).json({

                    success: true,

                    uploaded: true

                });


            } catch (error) {

                console.error(
                    "================================="
                );

                console.error(
                    "❌ PHOTO UPLOAD FAILED"
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

                    uploaded: false,

                    message:
                        "Photo upload failed."

                });

            }

        }
    );

}