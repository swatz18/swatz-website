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

    const [selectedImages, setSelectedImages] = useState([]);
    // const [previewImages, setPreviewImages] = useState([]);

    const [orderNotes, setOrderNotes] = useState("");
    const handleAddToCart = () => {

    addItem({

        id: product.id,

        title: product.title,

        category: product.category,

            image: product.image,

            price: product.price,

            quantity,

            photos: selectedImages,

            notes: orderNotes

        });

        navigate("/cart");

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

            <div className="product-detail-container">

                {/* Left */}

                <div className="product-detail-image">

                    <img
                        src={product.image}
                        alt={product.title}
                    />

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

                        ₹{product.price}

                    </p>

                    <p className="product-detail-description">

                        {product.description}

                    </p>

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

                            Your Memories

                        </h4>

                        <p>

                            Upload one or more photos for personalization.

                        </p>

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

                            placeholder="Example:
                            Please arrange the photos in a collage style."
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

                        >

                            🛒 Add to Cart

                        </button>

                        <button className="buy-btn">

                            ✨ Make it Yours

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}