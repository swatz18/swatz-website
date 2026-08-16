import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

export async function getGoogleDriveClient() {

    console.log("========== GOOGLE DRIVE AUTH ==========");

    console.log(
        "Client ID:",
        process.env.GOOGLE_CLIENT_ID ? "Loaded" : "Missing"
    );

    console.log(
        "Client Secret:",
        process.env.GOOGLE_CLIENT_SECRET ? "Loaded" : "Missing"
    );

    console.log(
        "Refresh Token:",
        process.env.GOOGLE_REFRESH_TOKEN ? "Loaded" : "Missing"
    );

    console.log(
        "Auth type:",
        oauth2Client.constructor.name
    );

    try {

        const tokenResponse =
            await oauth2Client.getAccessToken();

        console.log(
            "Access token:",
            tokenResponse.token
                ? "Generated successfully"
                : "Failed"
        );

        console.log("======================================");

        return oauth2Client;

    } catch (error) {

        console.error(
            "❌ Google OAuth authentication failed"
        );

        console.error(
            "Message:",
            error.message
        );

        console.error(
            "Code:",
            error.code
        );

        throw error;

    }

}