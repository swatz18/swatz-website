import dotenv from "dotenv";
import path from "path";
import { google } from "googleapis";

// Load .env.local when running locally
dotenv.config({
    path: path.resolve(process.cwd(), ".env.local")
});

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

export async function getGoogleDriveClient() {

    return oauth2Client;

}