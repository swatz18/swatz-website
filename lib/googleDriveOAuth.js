import fs from "fs";
import path from "path";
import { google } from "googleapis";

const credentials = JSON.parse(

    fs.readFileSync(

        path.join(
            process.cwd(),
            "credentials",
            "google-oauth-token.json"
        ),
        "utf8"

    )

);

const oauth2Client = new google.auth.OAuth2(

    credentials.client_id,
    credentials.client_secret

);

oauth2Client.setCredentials({

    refresh_token: credentials.refresh_token

});

export async function getGoogleDriveClient() {

    await oauth2Client.getAccessToken();

    return oauth2Client;

}