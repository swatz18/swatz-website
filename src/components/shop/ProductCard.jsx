import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
    id,
    image,
    category,
    title,
    shortDescription,
    price,
    badge
}){

    return (

        <div className="product-card">

            <div className="product-image">

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

                    {category}

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