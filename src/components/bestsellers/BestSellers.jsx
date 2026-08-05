import "./BestSellers.css";
import BestSellerCard from "./BestSellerCard";

// Temporary Images
import babyMagnet from "../../assets/images/products/baby-magnet.jpg";
import familyKeychain from "../../assets/images/products/family-keychain.jpg";
import acrylicMagnet from "../../assets/images/products/acrylic-magnet.jpg";
import weddingBadge from "../../assets/images/products/wedding-badge.jpg";
import flexibleMagnet from "../../assets/images/products/flexible-magnet.jpg";
import stripMagnet from "../../assets/images/products/acrylic-strip.jpg";

const products = [

    {
        category: "MAGNET",
        title: "Baby Magnets",
        price: "₹99",
        image: babyMagnet
    },

    {
        category: "KEYCHAIN",
        title: "Family Keychains",
        price: "₹99",
        image: familyKeychain
    },

    {
        category: "MAGNET",
        title: "Acrylic Magnets",
        price: "₹120",
        image: acrylicMagnet
    },

    {
        category: "BADGE",
        title: "Wedding Badges",
        price: "₹49",
        image: weddingBadge
    },

    {
        category: "MAGNET",
        title: "Flexible Polaroid Magnets",
        price: "₹75",
        image: flexibleMagnet
    },

    {
        category: "MAGNET",
        title: "Acrylic Strip Magnets",
        price: "₹120",
        image: stripMagnet
    }

];

export default function BestSellers() {

    return (

        <section className="bestsellers-section">

            <div className="bestsellers-header">

                <h2>Bestsellers</h2>

                <p>
                    Our most-loved personalised keepsakes, crafted for every occasion.
                </p>

            </div>

            <div className="bestsellers-grid">

                {products.map((product, index) => (

                    <BestSellerCard
                        key={index}
                        {...product}
                    />

                ))}

            </div>

            <div className="explore-all">

                <button>

                    Explore All Collections →

                </button>

            </div>

        </section>

    );

}