// import babyMagnet from "../../assets/images/products/baby-magnet.jpg";

import M1 from "../../assets/images/products/FM 58mm 1.jpg";
import M3 from "../../assets/images/products/FM 58mm 3.jpg";
import M4 from "../../assets/images/products/FM 58mm 4.jpg";
import M5 from "../../assets/images/products/FM 58mm 5.jpg";
import PB1 from "../../assets/images/products/PB 44mm 1.jpg";
import PB3 from "../../assets/images/products/PB 44mm 3.jpg";
import PB4 from "../../assets/images/products/PB 44mm 4.jpg";
import FPB1 from "../../assets/images/products/PB 58mm 1.jpg";
import FPB2 from "../../assets/images/products/PB 58mm 2.jpg";
import K1 from "../../assets/images/products/KC 44mm 1.jpg";
import K3 from "../../assets/images/products/KC 44mm 3.jpg";
import K4 from "../../assets/images/products/KC 44mm 4.jpg";
import acrylicMagnet from "../../assets/images/products/acrylic-magnet.jpg";
import flexibleMagnet from "../../assets/images/products/flexible-magnet.jpg";


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

    image: M1,

    images: [
    M1,
    M3,
    M4,
    M5
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
            label: "Without Stand - 6 * 9 cm",
            price: 120,
            images: [
                acrylicMagnet,
                acrylicMagnet,
                acrylicMagnet
            ]
        },
        {
            label: "With Stand - 6.5 * 10 cm",
            price: 150,
            images: [
                acrylicMagnet,
                acrylicMagnet,
                acrylicMagnet
            ]
        }
    ],
    price:120,

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
            label: "5 * 13 cm",
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
        "Customize an entire magnet sheet for just ₹499. Choose your preferred magnet size and get the maximum number of magnets that fit on the sheet.",

    variants: [
        {
            label: "6 * 6 cm",
            quantity: "12",
            price: 499
        }
    ],

    price: 499,
    priceLabel: "₹499/Sheet",

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
        "Customize an entire magnet sheet for just ₹499. Choose your preferred magnet size and get the maximum number of magnets that fit on the sheet.",

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
    priceLabel: "₹499/Sheet",

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
        "Customize an entire magnet sheet for ₹499. Choose your preferred magnet size and get the maximum number of magnets that fit on the sheet.",

    variants: [
        {
            label: "4 × 4 cm",
            quantity: "12",
            price: 499
        },
        {
            label: "4 × 5 cm",
            quantity: "10",
            price: 499
        }
    ],

    price: 89,
    priceLabel: "₹499/Sheet",

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
                price: 99,
                images: [
                    K1,
                    K3,
                    K4
                ]
            },
            
        ],

        price: 49,

        badge: "",

        image: K1,

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
                price: 25,

                images: [
                    PB1,
                    PB3,
                    PB4
                ]
            },

            {
                label: "58 mm",
                price: 35,

                images: [
                    FPB1,
                    FPB2
                    
                ]
            }
        ],

        price: 25,

        badge: "",

        image: PB1,

        features: [
            "44 mm & 58 mm Available",
            "Premium Metal Back",
            "Sharp Print Quality",
            "Fully Personalised"
        ]
    },

];