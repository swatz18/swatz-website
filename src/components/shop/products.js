import { getProductImages } from "./productImages";


/* =====================================================
   PRODUCT IMAGES
===================================================== */

// ---------- MAGNETS ----------

const roundMagnetImages =
    getProductImages("Round Magnets");

const acrylicWithStandImages =
    getProductImages("Rectangle Acrylic magnet with stand");

const acrylicWithoutStandImages =
    getProductImages("Rectangle Acrylic magnet without stand");

const acrylicStripMagnetImages =
    getProductImages("Acrylic Strip Magnet");

const squarePhotoMagnetImages =
    getProductImages("Square photo Magnet");

const miniPhoto4x4Images =
    getProductImages("Mini Photo Magnet 4X4");

const miniPhoto4x5Images =
    getProductImages("Mini Photo Magnet 4X5");

const polaroidSmallImages =
    getProductImages("Polaroid Small");

const polaroidMediumImages =
    getProductImages("Polaroid Medium");

const polaroidLargeImages =
    getProductImages("Polaroid Large");


// ---------- KEYCHAINS ----------

const keychainImages =
    getProductImages("Keychains");


// ---------- PIN BADGES ----------

const pinBadge44Images =
    getProductImages("Pin Badges 44mm");

const pinBadge58Images =
    getProductImages("Pin Badges 58mm");


/* =====================================================
   PRODUCTS
===================================================== */

export const products = [

    // =================================================
    // 🧲 MAGNETS
    // =================================================


    // ---------- CLASSIC MAGNET ----------

    {
        id: 1,

        category: "Magnets",

        type: "Classic Magnets",

        title: "Classic Round Magnet",

        shortDescription:
            "Our signature personalised magnet for every memory.",

        description:
            "Transform your favourite photos into timeless keepsakes with our Classic Round Magnet. Perfect for birthdays, weddings, anniversaries, baby milestones, logos, pets and every special moment.",

        variants: [
            {
                label: "58 mm",
                price: 99,
                images: roundMagnetImages
            }
        ],

        price: 99,

        badge: "MOST LOVED",

        images: roundMagnetImages,

        image: roundMagnetImages[0],

        features: [
            "58 mm Round Magnet",
            "Premium Print Quality",
            "Strong Magnet",
            "Fully Personalised"
        ]
    },


    // ---------- PREMIUM ACRYLIC ----------

    {
        id: 2,

        category: "Magnets",

        type: "Premium Acrylic",

        title: "Rectangle Acrylic Magnet",

        shortDescription:
            "Crystal-clear acrylic keepsakes with a premium finish.",

        description:
            "A premium acrylic magnet designed to showcase your favourite memories with exceptional clarity and elegance.",

        variants: [
            {
                label: "Without Stand - 6 × 9 cm",
                price: 120,
                images: acrylicWithoutStandImages
            },

            {
                label: "With Stand - 6.5 × 10 cm",
                price: 150,
                images: acrylicWithStandImages
            }
        ],

        price: 120,

        badge: "PREMIUM",

        images: acrylicWithoutStandImages,

        image: acrylicWithoutStandImages[0],

        features: [
            "Premium Acrylic",
            "Crystal Clear Finish",
            "Scratch Resistant",
            "Fully Personalised"
        ]
    },


    // ---------- ACRYLIC STRIP MAGNET ----------

    {
        id: 3,

        category: "Magnets",

        type: "Premium Acrylic",

        title: "Acrylic Strip Magnet",

        shortDescription:
            "A sleek panoramic magnet for unforgettable moments.",

        description:
            "Perfect for couple photos, travel memories and family portraits in an elegant panoramic acrylic format.",

        variants: [
            {
                label: "5 × 13 cm",
                price: 149,
                images: acrylicStripMagnetImages
            }
        ],

        price: 149,

        badge: "Retro",

        images: acrylicStripMagnetImages,

        image: acrylicStripMagnetImages[0],

        features: [
            "Slim Strip Design",
            "Premium Acrylic",
            "Modern Finish",
            "Fully Personalised"
        ]
    },


    // =================================================
    // 🧲 FLEXIBLE MAGNETS
    // =================================================


    // ---------- SQUARE PHOTO MAGNET ----------

    {
        id: 4,

        category: "Magnets",

        type: "Flexible Magnets",

        title: "Square Photo Magnet",

        shortDescription:
            "Minimal square magnets for everyday memories.",

        description:
            "Customize an entire magnet sheet for just ₹499. Choose your preferred magnet size and get the maximum number of magnets that fit on the sheet.",

        variants: [
            {
                label: "6 × 6 cm",
                quantity: 12,
                price: 499,
                images: squarePhotoMagnetImages
            }
        ],

        price: 499,

        priceLabel: "₹499 / Sheet",

        badge: "",

        images: squarePhotoMagnetImages,

        image: squarePhotoMagnetImages[0],

        features: [
            "Flexible Magnet Sheet",
            "Premium Print",
            "Lightweight",
            "Fully Personalised"
        ]
    },


    // ---------- POLAROID PHOTO MAGNET ----------

    {
        id: 5,

        category: "Magnets",

        type: "Flexible Magnets",

        title: "Polaroid Photo Magnet",

        shortDescription:
            "Classic Polaroid-style magnets in multiple sizes.",

        description:
            "Customize an entire magnet sheet for just ₹499. Choose your preferred magnet size and get the maximum number of magnets that fit on the sheet.",

        variants: [
            {
                label: "Small",
                quantity: 15,
                price: 499,
                images: polaroidSmallImages
            },

            {
                label: "Medium",
                quantity: 10,
                price: 499,
                images: polaroidMediumImages
            },

            {
                label: "Large",
                quantity: 6,
                price: 499,
                images: polaroidLargeImages
            }
        ],

        price: 499,

        priceLabel: "₹499 / Sheet",

        badge: "POPULAR",

        images: polaroidSmallImages,

        image: polaroidSmallImages[0],

        features: [
            "Multiple Sizes",
            "Premium Flexible Sheet",
            "Polaroid Layout",
            "Fully Personalised"
        ]
    },


    // ---------- MINI PHOTO MAGNET ----------

    {
        id: 6,

        category: "Magnets",

        type: "Flexible Magnets",

        title: "Mini Photo Magnet",

        shortDescription:
            "Tiny personalised magnets with a big emotional touch.",

        description:
            "Customize an entire magnet sheet for ₹499. Choose your preferred magnet size and get the maximum number of magnets that fit on the sheet.",

        variants: [
            {
                label: "4 × 4 cm",
                quantity: 24,
                price: 499,
                images: miniPhoto4x4Images
            },

            {
                label: "4 × 5 cm",
                quantity: 20,
                price: 499,
                images: miniPhoto4x5Images
            }
        ],

        price: 499,

        priceLabel: "₹499 / Sheet",

        badge: "",

        images: miniPhoto4x4Images,

        image: miniPhoto4x4Images[0],

        features: [
            "Compact Size",
            "Premium Print",
            "Flexible Magnet",
            "Fully Personalised"
        ]
    },


    // =================================================
    // 🔑 KEYCHAINS
    // =================================================

    {
        id: 7,

        category: "Keychains",

        type: "Keychains",

        title: "Photo Keychain",

        shortDescription:
            "Carry your favourite memories wherever you go.",

        description:
            "Our personalised round photo keychains are handcrafted to keep your favourite moments close. Perfect for gifting, everyday use, or preserving special memories.",

        variants: [
            {
                label: "44 mm",
                price: 49,
                images: keychainImages
            }
        ],

        price: 49,

        badge: "",

        images: keychainImages,

        image: keychainImages[0],

        features: [
            "Premium Print Quality",
            "44 mm Round Keychain",
            "Strong Metal Ring",
            "Fully Personalised"
        ]
    },


    // =================================================
    // 📌 PIN BADGES
    // =================================================

    {
        id: 8,

        category: "Pin Badges",

        type: "Pin Badges",

        title: "Round Pin Badge",

        shortDescription:
            "Wear your favourite memories with pride.",

        description:
            "Perfect for events, celebrations, branding, gifting, or personal memories. Our personalised round pin badges are available in two popular sizes.",

        variants: [
            {
                label: "44 mm",
                price: 25,
                images: pinBadge44Images
            },

            {
                label: "58 mm",
                price: 35,
                images: pinBadge58Images
            }
        ],

        price: 25,

        badge: "",

        images: pinBadge44Images,

        image: pinBadge44Images[0],

        features: [
            "44 mm & 58 mm Available",
            "Premium Metal Back",
            "Sharp Print Quality",
            "Fully Personalised"
        ]
    }

];