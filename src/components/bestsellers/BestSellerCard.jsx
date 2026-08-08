import { Link } from "react-router-dom";
export default function BestSellerCard({ product }) {

    return (

        <article className="bestseller-card">

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

                        ₹{product.price}

                    </span>

                    <Link
                        to={`/product/${product.id}`}
                        className="action"
                    >

                        Personalise →

                    </Link>

                </div>

            </div>

        </article>

    );

}