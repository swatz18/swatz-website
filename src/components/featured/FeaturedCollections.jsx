import "./FeaturedCollections.css";
import FeaturedCard from "./FeaturedCard";
import { products } from "../shop/products.js";

export default function FeaturedCollections() {

    const featuredProducts = [
        products.find(product => product.category === "Magnets"),
        products.find(product => product.category === "Keychains"),
        products.find(product => product.category === "Pin Badges")
    ];

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

                    {featuredProducts.map(product => (

                        <FeaturedCard
                            key={product.id}
                            image={product.image}
                            title={
                                product.category === "Magnets"
                                    ? "Fridge Magnets"
                                    : product.category
                            }
                            category={product.category}
                            description={product.shortDescription}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}