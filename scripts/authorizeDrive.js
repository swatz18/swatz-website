import { authenticate } from "@google-cloud/local-auth";
import fs from "fs/promises";
import path from "path";

const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/spreadsheets"
];

const KEYFILE = path.join(
    process.cwd(),
    "credentials",
    "google-oauth.json"
);

async function authorize() {

    const client = await authenticate({

        scopes: SCOPES,

        keyfilePath: KEYFILE

    });

    const credentials = {

        client_id: client._clientId,
        client_secret: client._clientSecret,
        refresh_token: client.credentials.refresh_token

    };

    await fs.writeFile(

        path.join(
            process.cwd(),
            "credentials",
            "google-oauth-token.json"
        ),

        JSON.stringify(credentials, null, 2)

    );

    console.log("\n✅ OAuth completed successfully.");
    console.log("Refresh token saved to credentials/google-oauth-token.json");

}

authorize().catch(console.error);