// import babyMagnet from "../../assets/images/products/baby-magnet.jpg";

import M2 from "../../assets/images/products/M2.png";
import M3 from "../../assets/images/products/M3.png";
import M4 from "../../assets/images/products/M4.png";
import familyKeychain from "../../assets/images/products/family-keychain.jpg";
import weddingBadge from "../../assets/images/products/wedding-badge.jpg";
import acrylicMagnet from "../../assets/images/products/acrylic-magnet.jpg";
import flexibleMagnet from "../../assets/images/products/flexible-magnet.jpg";
import combo from "../../assets/images/products/baby-magnet.jpg";

export const products = [

    // ========================================
// 🧲 MAGNETS
// ========================================

// ---------- CLASSIC MAGNETS ----------

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
            price: 99
        }
    ],

    price: 99,

    badge: "MOST LOVED",

    image: M2,

    images: [
    M2,
    M3,
    M4,
],

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
            label: "Standard",
            price: 149
        }
    ],

    price: 149,

    badge: "PREMIUM",

    image: acrylicMagnet,

    features: [
        "Premium Acrylic",
        "Crystal Clear Finish",
        "Scratch Resistant",
        "Fully Personalised"
    ]
},

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
            label: "Standard",
            price: 149
        }
    ],

    price: 149,

    badge: "",

    image: acrylicMagnet,

    features: [
        "Slim Strip Design",
        "Premium Acrylic",
        "Modern Finish",
        "Fully Personalised"
    ]
},

// ---------- FLEXIBLE MAGNETS ----------

{
    id: 4,

    category: "Magnets",

    type: "Flexible Magnets",

    title: "Square Photo Magnet",

    shortDescription:
        "Minimal square magnets for everyday memories.",

    description:
        "Printed on premium flexible magnetic sheets, these lightweight magnets beautifully display your favourite moments.",

    variants: [
        {
            label: "3.5 × 3.5",
            price: 79
        }
    ],

    price: 79,

    badge: "",

    image: flexibleMagnet,

    features: [
        "Flexible Magnet Sheet",
        "Premium Print",
        "Lightweight",
        "Fully Personalised"
    ]
},

{
    id: 5,

    category: "Magnets",

    type: "Flexible Magnets",

    title: "Polaroid Photo Magnet",

    shortDescription:
        "Classic Polaroid-style magnets in multiple sizes.",

    description:
        "Relive your favourite memories with our Polaroid-inspired magnets, available in multiple sizes to suit every occasion.",

    variants: [
        {
            label: "Small",
            quantity: "15",
            price: 499
        },
        {
            label: "Medium",
            quantity: "10",
            price: 499
        },
        {
            label: "Large",
            quantity: "6",
            price: 499
        }
    ],

    price: 99,

    badge: "POPULAR",

    image: flexibleMagnet,

    features: [
        "Multiple Sizes",
        "Premium Flexible Sheet",
        "Polaroid Layout",
        "Fully Personalised"
    ]
},

{
    id: 6,

    category: "Magnets",

    type: "Flexible Magnets",

    title: "Mini Photo Magnet",

    shortDescription:
        "Tiny personalised magnets with a big emotional touch.",

    description:
        "Cute, compact and perfect for memory walls, gifting and decorating small spaces with your favourite photos.",

    variants: [
        {
            label: "4 × 4",
            quantity: "12",
            price: 399
        },
        {
            label: "4 × 5",
            quantity: "10",
            price: 399
        }
    ],

    price: 89,

    badge: "",

    image: flexibleMagnet,

    features: [
        "Compact Size",
        "Premium Print",
        "Flexible Magnet",
        "Fully Personalised"
    ]
},


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
                price: 99
            },
            {
                label: "58 mm",
                price: 129
            }
        ],

        price: 99,

        badge: "",

        image: familyKeychain,

        features: [
            "Premium Print Quality",
            "44 mm & 58 mm Available",
            "Strong Metal Ring",
            "Fully Personalised"
        ]
    },
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
                price: 35
            },
            {
                label: "58 mm",
                price: 50
            }
        ],

        price: 35,

        badge: "",

        image: weddingBadge,

        features: [
            "44 mm & 58 mm Available",
            "Premium Metal Back",
            "Sharp Print Quality",
            "Fully Personalised"
        ]
    },

];