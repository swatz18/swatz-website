import "./BestSellers.css";
import BestSellerCard from "./BestSellerCard";
import { products } from "../shop/products";
import { Link } from "react-router-dom";

const bestsellerIds = [1, 2, 5, 7];

const bestsellerProducts = products.filter(product =>
    bestsellerIds.includes(product.id)
);

export default function BestSellers() {

    return (

        <section className="bestsellers-section">

            <div className="bestsellers-header">

                <h2>Bestsellers</h2>

                <p>
                    Our best-loved keepsakes, made for moments that matter.
                </p>

            </div>

            <div className="bestsellers-grid">

                {bestsellerProducts.map(product => (

                    <BestSellerCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

            <div className="explore-all">

                <Link
                    to="/shop"
                    className="explore-all-button"
                >

                    Explore All Collections →

                </Link>

            </div>

        </section>

    );

}