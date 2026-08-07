import { google } from "googleapis";
import { getGoogleClient } from "./google.js";

const SHEET_ID = "17fhCdpRfWndjtoVYUS3D9LaZ58OrlEZ-Fkb7KIbUqHo";

async function saveOrderHeader(order){

    const auth = await getGoogleClient();

    const sheets = google.sheets({

        version: "v4",
        auth

    });

    await sheets.spreadsheets.values.append({

        spreadsheetId: SHEET_ID,

        range: "Orders!A:N",

        valueInputOption: "USER_ENTERED",

        requestBody: {

            values: [[

                order.referenceId,
                order.orderDate,
                order.customerName,
                order.phoneNumber,
                order.status,

                order.items.reduce(
                    (total, item) => total + item.quantity,
                    0
                ),

                order.subtotal,
                order.discount,
                order.finalAmount,

                order.paymentStatus,
                order.driveFolder,
                order.source,
                new Date().toISOString(),

                order.photoUploadStatus

            ]]

        }

    });

}

async function saveOrderDetails(order) {

    const auth = await getGoogleClient();

    const sheets = google.sheets({

        version: "v4",
        auth

    });

    const values = order.items.map(item => [

        order.referenceId,

        item.id,

        item.title,

        item.category,

        item.variant || "",

        item.variantQuantity || "",

        item.quantity,

        item.price,

        item.price * item.quantity,

        item.notes,

        Array.isArray(item.photos)
            ? item.photos.length
            : item.photos

    ]);

    await sheets.spreadsheets.values.append({

        spreadsheetId: SHEET_ID,

        range: "Order Details!A:K",

        valueInputOption: "USER_ENTERED",

        requestBody: {

            values

        }

    });

}
export async function saveOrder(order) {

    await saveOrderHeader(order);

    await saveOrderDetails(order);

}