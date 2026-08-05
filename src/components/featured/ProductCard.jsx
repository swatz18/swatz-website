import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">

        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="image-placeholder">
            Product Image
          </div>
        )}

      </div>

      <span className="product-badge">
        {product.badge}
      </span>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <div className="product-footer">

        <span className="price">
          {product.price}
        </span>

        <button>
          {product.button}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;