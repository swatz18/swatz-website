import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
    id,
    image,
    type,
    category,
    title,
    shortDescription,
    price,
    badge
}) {

    return (

        <div className="product-card card">

            <div className="product-image card-image">

                {badge && (

                    <span className="product-badge">

                        {badge}

                    </span>

                )}

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="product-content">

                <span className="product-category">

                    {type || category}

                </span>

                <h3>

                    {title}

                </h3>

                <p className="product-short-description">

                    {shortDescription}

                </p>

                <div className="product-bottom">

                    <span className="product-price">

                        ₹{price}

                    </span>

                    <Link
                        to={`/product/${id}`}
                        className="product-button"
                    >

                        Create Yours →

                    </Link>

                </div>

            </div>

        </div>

    );

}