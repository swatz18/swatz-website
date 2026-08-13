import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (

        <Link
            to={`/product/${product.id}`}
            className="product-card"
        >

            <div className="product-image">

                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                ) : (
                    <div className="image-placeholder">
                        Product Image
                    </div>
                )}

            </div>

            <span className="product-badge">
                {product.badge}
            </span>

            <h3>
                {product.name}
            </h3>

            <p>
                {product.description}
            </p>

            <div className="product-footer">

                <span className="price">
                    {product.price}
                </span>

                <span className="product-button">
                    {product.button}
                </span>

            </div>

        </Link>

    );

}

export default ProductCard;