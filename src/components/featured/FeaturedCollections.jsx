import "./FeaturedCollections.css";
import FeaturedCard from "./FeaturedCard";

// Temporary Images
import M1 from "../../assets/images/products/FM 58mm 1.jpg";
import K1 from "../../assets/images/products/KC 44mm 1.jpg";
import PB3 from "../../assets/images/products/PB 44mm 3.jpg";

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
                        image={M1}
                        title="Fridge Magnets"
                        category="Magnets"
                        description="Personalised magnets that celebrates every memory."
                    />

                    <FeaturedCard
                        image={K1}
                        title="Keychains"
                        category="Keychains"
                        description="Carry your favourite moments wherever you go."
                    />

                    <FeaturedCard
                        image={PB3}
                        title="Pin Badges"
                        category="Pin Badges"
                        description="Turn your favourite moments into wearable keepsakes."
                    />

                </div>

            </div>

        </section>

    );

}