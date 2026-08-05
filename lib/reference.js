const CHARACTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateReferenceId() {

    const now = new Date();

    const year = String(now.getFullYear()).slice(-2);

    const month = String(now.getMonth() + 1).padStart(2, "0");

    const day = String(now.getDate()).padStart(2, "0");

    const date = `${year}${month}${day}`;

    let random = "";

    for (let i = 0; i < 4; i++) {

        random += CHARACTERS.charAt(

            Math.floor(Math.random() * CHARACTERS.length)

        );

    }

    return `SW-${date}-${random}`;

}