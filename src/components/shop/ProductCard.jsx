import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
    id,
    images,
    image,
    type,
    category,
    title,
    shortDescription,
    price,
    priceLabel,
    variants,
    badge
}) {

    return (

        <Link
            to={`/product/${id}`}
            className="product-card card"
        >

            <div className="product-image card-image">

                {badge && (

                    <span className="product-badge">

                        {badge}

                    </span>

                )}

                <img
                    src={images?.[0] || image}
                    alt={title}
                />

            </div>

            <div className="product-content">

                <span className="product-category">

                    {type || category}

                </span>

                <h3>
                    {title}
                    {category === "Return Gifts" && variants?.[0]?.quantity
                        ? ` (${variants[0].quantity} pcs)`
                        : ""}
                </h3>

                <p className="product-short-description">

                    {shortDescription}

                </p>

                <div className="product-bottom">

                    <span className="product-price">

                        {priceLabel ||
                            (variants?.length > 1
                                ? `From ₹${Math.min(...variants.map(v => v.price))}`
                                : `₹${price}`)
                        }

                    </span>

                    <span className="product-button">

                        {category === "Return Gifts"
                            ? "Choose Count →"
                            : variants?.length > 1
                                ? "Choose Size →"
                                : "Create Yours →"
                        }

                    </span>

                </div>

            </div>

        </Link>

    );

}