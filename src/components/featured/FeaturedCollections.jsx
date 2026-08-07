import "./FeaturedCollections.css";
import FeaturedCard from "./FeaturedCard";

// Temporary Images
import magnet from "../../assets/images/products/magnet.jpg";
import keychain from "../../assets/images/products/keychain.jpg";
import badge from "../../assets/images/products/badge.jpg";

export default function FeaturedCollections() {

    return (

        <section className="featured-section">

            <div className="section-container">

                <div className="featured-header section-header">

                    <h2>Featured Collections</h2>

                    <p>
                        Thoughtfully crafted keepsakes for every memory.
                    </p>

                </div>

                <div className="featured-grid">

                    <FeaturedCard
                        image={magnet}
                        title="Fridge Magnets"
                        category="Magnets"
                        description="Personalised magnets that celebrates every memory."
                    />

                    <FeaturedCard
                        image={keychain}
                        title="Keychains"
                        category="Keychains"
                        description="Carry your favourite moments wherever you go."
                    />

                    <FeaturedCard
                        image={badge}
                        title="Pin Badges"
                        category="Pin Badges"
                        description="Tiny accessories with big personality."
                    />

                </div>

            </div>

        </section>

    );

}