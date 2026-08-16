import { Link } from "react-router-dom";

export default function BestSellerCard({ product }) {

    return (

        <Link
            to={`/product/${product.id}`}
            className="bestseller-card"
        >

            <div className="bestseller-image">

                <img
                    src={product.image}
                    alt={product.title}
                />

            </div>

            <div className="bestseller-content">

                <span className="category">

                    {product.category}

                </span>

                <h3>

                    {product.title}

                </h3>

                <div className="bottom-row">

                    <span className="price">

                        {product.priceLabel ||
                            (product.variants?.length > 1
                                ? `From ₹${Math.min(
                                    ...product.variants.map(v => v.price)
                                )}`
                                : `₹${product.price}`)
                        }

                    </span>

                    <span className="action">

                        {product.variants?.length > 1
                            ? "Explore →"
                            : "Personalise →"
                        }

                    </span>

                </div>

            </div>

        </Link>

    );

}