import { removeItem } from "../../services/cartService";
export default function CartItem({item,index}) {

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

                </h3>

                <p className="cart-item-price">

                    ₹{item.price} × {item.quantity}

                </p>

                <div className="cart-item-meta">

                    <span>

                         📷 {item.photos} Photos Added

                    </span>

                    {item.notes && (

                        <span>

                            📝 Notes Added

                        </span>

                    )}

                </div>

                <div className="cart-item-buttons">

                    <button>

                        Edit

                    </button>

                    <button

                        onClick={() => {

                            removeItem(index);

                            window.location.reload();

                        }}

                    >

                        Remove

                    </button>

                </div>

            </div>

        </div>

    );

}