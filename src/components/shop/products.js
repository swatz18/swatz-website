import {
    getProductImages,
    getProductVideo
} from "./productImages";


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

// ---------- RETURN GIFTS ----------
const roundMagnetVideo =
    getProductVideo("Round Magnets");

const bharathiyarFlexiMagnetImages =
    getProductImages("Bharathiyar Flexi Magnet");

const murugarFlexiMagnetImages =
    getProductImages("Murugar Flexi Magnet");    


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


   // ---------- ACRYLIC MAGNET — WITHOUT STAND ----------

{
    id: 2,

    category: "Magnets",

    type: "Premium Acrylic",

    title: "Rectangle Acrylic Magnet - Without Stand",

    shortDescription:
        "Crystal-clear acrylic keepsakes with a premium finish.",

    description:
        "A premium acrylic magnet designed to showcase your favourite memories with exceptional clarity and elegance.",

    variants: [
        {
            label: "Single Side",
            price: 125,
            images: acrylicWithoutStandImages
        },

        {
            label: "Double Side",
            price: 150,
            images: acrylicWithoutStandImages
        }
    ],

    price: 125,

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


// ---------- ACRYLIC MAGNET — WITH STAND ----------

{
    id: 3,

    category: "Magnets",

    type: "Premium Acrylic",

    title: "Rectangle Acrylic Magnet - With Stand",

    shortDescription:
        "Crystal-clear acrylic keepsakes with a premium finish.",

    description:
        "A premium acrylic magnet with a sturdy stand, designed to beautifully display your favourite memories.",

    variants: [
        {
            label: "6.5 × 10 cm",
            price: 150,
            images: acrylicWithStandImages
        }
    ],

    price: 150,

    badge: "PREMIUM",

    images: acrylicWithStandImages,

    image: acrylicWithStandImages[0],

    features: [
        "Premium Acrylic",
        "Crystal Clear Finish",
        "Sturdy Stand",
        "Fully Personalised"
    ]
},


    // ---------- ACRYLIC STRIP MAGNET ----------

    {
        id: 4,

        category: "Magnets",

        type: "Premium Acrylic",

        title: "Acrylic Strip Magnet",

        shortDescription:
            "A sleek panoramic magnet for unforgettable moments.",

        description:
            "Perfect for couple photos, travel memories and family portraits in an elegant panoramic acrylic format.",

        variants: [
        {
            label: "Single Side",
            price: 175,
            images: acrylicStripMagnetImages
        },

        {
            label: "Double Side",
            price: 199,
            images: acrylicStripMagnetImages
        }
    ],

        price: 175,

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
        id: 5,

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
        id: 6,

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
        id: 7,

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
        id: 8,

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
        id: 9,

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
    },
    // =================================================
// 🎁 RETURN GIFTS
// =================================================


// ---------- CLASSIC ROUND FRIDGE MAGNET ----------

{
    id: 10,

    category: "Return Gifts",

    type: "Return Gifts",

    title: "Classic Round Fridge Magnet",

    shortDescription:
        "A personalised keepsake made specially for your special occasions.",

    description:
        "Our classic round fridge magnets make thoughtful and memorable return gifts for weddings, baby showers, birthdays and other special occasions.",

    variants: [
        {
            label: "50 pcs",
            quantity: 50,
            price: 2450,
            pricePerPiece: 49,
            images: [roundMagnetImages[0]]
            
        },

        {
            label: "100 pcs",
            quantity: 100,
            price: 4500,
            pricePerPiece: 45,
            images: [roundMagnetImages[0]]
        },

        {
            label: "200 pcs",
            quantity: 200,
            price: 8000,
            pricePerPiece: 40,
            images: [roundMagnetImages[0]]
        
        },

        {
            label: "300 pcs",
            quantity: 300,
            price: 11400,
            pricePerPiece: 38,
            images: [roundMagnetImages[0]]
        }
    ],

    price: 2450,

    badge: "RETURN GIFT",

    images:[roundMagnetImages[0]],

    image: roundMagnetImages[0],

    video: roundMagnetVideo,

    features: [
        "58 mm Round Magnet",
        "Premium Print Quality",
        "Strong Magnet",
        "Fully Personalised"
    ]
},


// ---------- BHARATHIYAR FLEXI MAGNET ----------

{
    id: 11,

    category: "Return Gifts",

    type: "Return Gifts",

    title: "Bharathiyar Flexi Magnet",

    shortDescription:
        "Beautiful Bharathiyar quotes turned into meaningful return gifts.",

    description:
        "Make your special occasion memorable with our personalised Bharathiyar quote flexi magnets. A thoughtful traditional return gift for weddings, baby showers and celebrations.",

    variants: [
        {
            label: "50 pcs",
            quantity: 50,
            price: 2600,
            pricePerPiece: 52,
            images: bharathiyarFlexiMagnetImages,
        },

        {
            label: "100 pcs",
            quantity: 100,
            price: 4900,
            pricePerPiece: 49,
            images: bharathiyarFlexiMagnetImages,
        },

        {
            label: "200 pcs",
            quantity: 200,
            price: 9000,
            pricePerPiece: 45,
            images: bharathiyarFlexiMagnetImages,
        },

        {
            label: "300 pcs",
            quantity: 300,
            price: 13500,
            pricePerPiece: 45,
            images: bharathiyarFlexiMagnetImages,
        }
    ],

    price: 2600,

    badge: "RETURN GIFT",

    images: bharathiyarFlexiMagnetImages,

    image: bharathiyarFlexiMagnetImages[0],

    features: [
        "3.5 × 2.5 Inch Flexi Magnet",
        "Bharathiyar Quotes",
        "Traditional Design",
        "Fully Personalised"
    ]
},


// ---------- MURUGAR FLEXI MAGNET ----------

{
    id: 12,

    category: "Return Gifts",

    type: "Return Gifts",

    title: "Murugar Flexi Magnet",

    shortDescription:
        "A traditional and meaningful Murugar return gift for every celebration.",

    description:
        "Our personalised Murugar flexi magnets are a beautiful traditional return gift option for weddings, baby showers, housewarming functions and special celebrations.",

    variants: [
        {
            label: "50 pcs",
            quantity: 50,
            price: 1497,
            pricePerPiece: 29.94,
            images: murugarFlexiMagnetImages,
        },

        {
            label: "100 pcs",
            quantity: 100,
            price: 2495,
            pricePerPiece: 24.95,
            images: murugarFlexiMagnetImages,
        },

        {
            label: "200 pcs",
            quantity: 200,
            price: 4990,
            pricePerPiece: 24.95,
            images: murugarFlexiMagnetImages,
        },

        {
            label: "300 pcs",
            quantity: 300,
            price: 7485,
            pricePerPiece: 24.95,
            images: murugarFlexiMagnetImages,
        }
    ],

    price: 1497,

    badge: "RETURN GIFT",

    images: murugarFlexiMagnetImages,

    image: murugarFlexiMagnetImages[0],

    features: [
        "4 × 5 cm Flexi Magnet",
        "Traditional Murugar Design",
        "Premium Print",
        "Fully Personalised"
    ]
},

];