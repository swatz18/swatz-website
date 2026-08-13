import { useState } from "react";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { products } from "../shop/products";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";



export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addItem } = useCart();
    const product = products.find(
        (item) => item.id === Number(id)
    );
    if (!product) {

    return <h2>Product not found.</h2>;

    }
    const [quantity, setQuantity] = useState(1);
    const [addingToCart, setAddingToCart] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(
        product.variants?.[0] || null
    );

    const [selectedImages, setSelectedImages] = useState([]);
    const [activeImage, setActiveImage] = useState(0);

    const [orderNotes, setOrderNotes] = useState("");
    

    const handleAddToCart = () => {

        setAddingToCart(true);

        addItem({
            id: product.id,
            title: product.title,
            category: product.category,
            type: product.type,
            variant: selectedVariant?.label ?? "",
            variantQuantity: selectedVariant?.quantity ?? "",
            image: product.image,
            price: selectedVariant?.price ?? product.price,
            quantity,
            photos: selectedImages,
            notes: orderNotes
        });

        setTimeout(() => {
            navigate("/cart");
        }, 400);
    };
    
    
    const handleImageUpload = (event) => {

        const files = Array.from(event.target.files);

        const validFiles = files.filter(file => {

            const validTypes = [
                "image/jpeg",
                "image/png",
                "image/webp"
            ];

            const maxSize = 10 * 1024 * 1024;

            return (
                validTypes.includes(file.type) &&
                file.size <= maxSize
            );

        });

        setSelectedImages(validFiles);

    };
    
    return (

        <section className="product-details">

            <div className="section-container">

            <div className="product-detail-container">

                {/* Left */}

                <div className="product-detail-image">

                    <div className="product-main-image">

                        <img
                            src={
                                product.images?.[activeImage] ||
                                product.image
                            }
                            alt={product.title}
                        />

                        {product.images && product.images.length > 1 && (

                            <>
                                <button
                                    type="button"
                                    className="image-arrow image-arrow-left"
                                    onClick={() =>
                                        setActiveImage(
                                            activeImage === 0
                                                ? product.images.length - 1
                                                : activeImage - 1
                                        )
                                    }
                                    aria-label="Previous image"
                                >
                                    ‹
                                </button>

                                <button
                                    type="button"
                                    className="image-arrow image-arrow-right"
                                    onClick={() =>
                                        setActiveImage(
                                            activeImage === product.images.length - 1
                                                ? 0
                                                : activeImage + 1
                                        )
                                    }
                                    aria-label="Next image"
                                >
                                    ›
                                </button>
                            </>

                        )}

                    </div>

                    {product.images && product.images.length > 1 && (

                        <div className="image-dots">

                            {product.images.map((_, index) => (

                                <button
                                    key={index}
                                    type="button"
                                    className={`image-dot ${
                                        activeImage === index ? "active" : ""
                                    }`}
                                    onClick={() => setActiveImage(index)}
                                    aria-label={`View image ${index + 1}`}
                                />

                            ))}

                        </div>

                    )}

                </div>

                {/* Right */}

                <div className="product-detail-info">

                    <span className="product-detail-category">

                        {product.category}

                    </span>

                    <h1>

                        {product.title}

                    </h1>

                    <p className="product-detail-price">

                        ₹{selectedVariant?.price ?? product.price}

                    </p>

                    <p className="product-detail-description">

                        {product.description}

                    </p>

                    {product.variants && product.variants.length > 0 && (

                        <div className="variant-section">

                            <h4>
                        
                                Available Size

                            </h4>

                            <div className="variant-pills">

                                {product.variants.map((variant) => (

                                    <button

                                        key={variant.label}

                                        type="button"

                                        className={`variant-pill ${
                                            selectedVariant === variant ? "active" : ""
                                        }`}

                                        onClick={() => setSelectedVariant(variant)}

                                    >

                                        {variant.label}

                                    </button>

                                ))}

                            </div>
                            {selectedVariant?.quantity && (

                                <p className="variant-quantity">

                                    Includes <strong>{selectedVariant.quantity}Magnets</strong>

                                </p>

                            )}

                        </div>

                    )}
                    <div className="quantity-section">

                        <h4>

                            Quantity

                        </h4>

                        <div className="quantity-box">

                            <button
                                onClick={() =>
                                    quantity > 1 &&
                                    setQuantity(quantity - 1)
                                }
                            >
                                −
                            </button>

                            <span>

                                {quantity}

                            </span>

                            <button
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>

                        </div>

                    </div>
                    <div className="upload-section">

                        <h4>

                            Upload Image 

                        </h4>


                        <label className="upload-button">

                            <input
                                type="file"
                                multiple
                                accept="image/png,image/jpeg,image/webp"
                                onChange={handleImageUpload}
                            />

                            📷 Choose Photos

                        </label>

                        {selectedImages.length > 0 && (

                            <p className="upload-count">

                                ✓ {selectedImages.length} {selectedImages.length === 1 ? "photo" : "photos"} selected

                            </p>

                        )}

                        <div className="preview-grid">

                            {selectedImages.map((image, index) => (

                                <img

                                    key={index}

                                    src={URL.createObjectURL(image)}

                                    alt={`Preview ${index + 1}`}

                                />

                            ))}

                        </div>

                    </div>
                    <div className="notes-section">

                        <h4>

                            Order Notes

                        </h4>

                        <textarea

                            rows="4"

                            placeholder="Example: Please arrange the photos in a collage style."
                            value={orderNotes}

                            onChange={(e) =>
                                setOrderNotes(e.target.value)
                            }

                        />

                    </div>
                    

                    <div className="product-detail-actions">

                        <button
                            className="cart-btn"
                            onClick={handleAddToCart}
                            disabled={addingToCart}
                        >
                            {addingToCart
                                ? "✓ Added to Cart"
                                : "🛒 Add to Cart"
                            }
                        </button>

                    </div>

                </div>

            </div>
            </div>
        </section>

    );

}