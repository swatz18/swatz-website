import "./FeaturedCollections.css";
import FeaturedCard from "./FeaturedCard";

// Temporary Images
import magnet from "../../assets/images/products/magnet.jpg";
import keychain from "../../assets/images/products/keychain.jpg";
import badge from "../../assets/images/products/badge.jpg";

export default function FeaturedCollections() {

    return (

        <section className="featured-section">

            <div className="featured-header">

                <h2>Featured Collections</h2>

                <p>
                    Thoughtfully crafted keepsakes for every memory.
                </p>

            </div>

            <div className="featured-grid">

                <FeaturedCard
                    image={magnet}
                    title="Fridge Magnets"
                    description="Personalised magnets that celebrate every memory."
                />

                <FeaturedCard
                    image={keychain}
                    title="Keychains"
                    description="Carry your favourite moments wherever you go."
                />

                <FeaturedCard
                    image={badge}
                    title="Pin Badges"
                    description="Tiny accessories with big personality."
                />

            </div>

        </section>

    );

}