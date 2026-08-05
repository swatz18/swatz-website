import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({

    keyFile: path.join(
        process.cwd(),
        "credentials",
        "google-service-account.json"
    ),

    scopes: [

        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive"

    ]

});

export async function getGoogleClient() {

    return await auth.getClient();

}