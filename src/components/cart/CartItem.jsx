import { useCart } from "../../context/CartContext";
export default function CartItem({item,index}) {
    
    const { removeItem } = useCart();
    return (
        

        <div className="cart-item">

            <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
            />

            <div className="cart-item-content">

                <span className="cart-item-category">

                    {item.category}

                </span>

                <h3>
                    {item.title}
                    {item.category === "Return Gifts" && item.variantQuantity
                        ? ` (${item.variantQuantity} pcs)`
                        : ""}
                </h3>

                <p className="cart-item-price">

                    ₹{item.price} × {item.quantity}

                </p>

                <div className="cart-item-meta">

                    {item.category === "Return Gifts" ? (

                        item.size && (

                            <span>
                                Size: {item.size}
                            </span>

                        )

                    ) : (

                        item.variant && (

                            <span>
                                Size: {item.variant}
                            </span>

                        )

                    )}

                    {item.category === "Return Gifts" && item.variantQuantity && (

                        <span>
                            Count: {item.variantQuantity} Magnets
                        </span>

                    )}

                    <span>

                        📷 {item.photos.length}{" "}
                        {item.photos.length === 1 ? "Photo" : "Photos"} Added

                    </span>

                    {item.notes && (

                        <span>

                            📝 Notes Added

                        </span>

                    )}

                </div>

                <div className="cart-item-buttons">


                    <button

                        onClick={() => {

                            removeItem(index);

                        }}

                    >

                        Remove

                    </button>

                </div>

            </div>

        </div>

    );

}