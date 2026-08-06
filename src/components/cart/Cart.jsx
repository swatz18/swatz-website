import "./Cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import OrderProcessing from "../order/OrderProcessing";
import { saveOrder } from "../../services/googleService";
import MessageDialog from "../common/MessageDialog";

export default function Cart() {
    const { cartItems, clearCart } = useCart();
    console.log(cartItems);
    const [processing, setProcessing] = useState(false);
    const [step, setStep] = useState(0);
    const [dialog, setDialog] = useState({

        open: false,

        icon: "💙",

        title: "",

        message: "",

        primaryButton: null,

        secondaryButton: null

    });

    const subtotal = cartItems.reduce(

        (total, item) => total + item.price * item.quantity,

        0

    );
    const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

    const openWhatsApp = (
        referenceId,
        photoUploadFailed = false
    ) => {

        const orderSummary = cartItems
            .map(
                item =>
                    `• ${item.title} ×${item.quantity} — ₹${item.price * item.quantity}`
            )
            .join("\n");

        const photoMessage = photoUploadFailed
            ? `

    ⚠️ My photos couldn't be uploaded automatically.

    I'll send them in this chat.`
            : "";

        const message = encodeURIComponent(

    `Hi Swatz! 💙

    I'd like to place an order.

    Reference ID:
    ${referenceId}

    Items:
    ${orderSummary}

    Subtotal:
    ₹${subtotal}${photoMessage}

    Thank you!`

        );

        window.open(

            `https://wa.me/917502131997?text=${message}`,

            "_blank"

        );

    };
    const handleCheckout = async () => {

        setProcessing(true);

        setStep(1);

        await delay(1000);

        setStep(2);

        const orderData = {

            orderDate: new Date().toLocaleString(),

            items: cartItems,

            subtotal,

            discount: 0,

            finalAmount: subtotal,

            status: "Awaiting Confirmation",

            customerName: "",

            phoneNumber: "",

            paymentStatus: "Pending",

            driveFolder: "",

            notes: "",

            source: "Website"

        };

        const result = await saveOrder(orderData);

        setProcessing(false);

        if (!result.success) {

            setDialog({

                open: true,

                icon: "❌",

                title: "Order Couldn't Be Completed",

                message:
                    "We couldn't complete your order. Please try again.",

                primaryButton: {

                    text: "Try Again",

                    onClick: () => {

                        setDialog(prev => ({

                            ...prev,

                            open: false

                        }));

                    }

                },

                secondaryButton: null

            });

            return;

        }

        const referenceId = result.referenceId;

        if (result.result === "PHOTO_UPLOAD_FAILED") {

            setDialog({

                open: true,

                icon: "⚠️",

                title: "Couldn't Upload Photos",

                message:
                    "Your order has been placed successfully.\n\nPlease send your photos through WhatsApp after it opens.",

                primaryButton: {

                    text: "Continue to WhatsApp",

                    onClick: () => {

                        setDialog(prev => ({

                            ...prev,

                            open: false

                        }));

                        openWhatsApp(referenceId, true);

                    }

                },

                secondaryButton: {

                    text: "Cancel",

                    onClick: () => {

                        setDialog(prev => ({

                            ...prev,

                            open: false

                        }));

                    }

                }

            });

            return;

        }

        await delay(500);

        openWhatsApp(referenceId);

    };
    if (cartItems.length === 0) {

        return (
            <>
                <section className="cart-section">

                    <div className="cart-empty">

                        <h2>Your cart is waiting for its first memory 💙</h2>

                        <p>

                            Let's create something special.

                        </p>

                    </div>

                </section>
                {processing && (

                <OrderProcessing step={step} />

                )}

        </>

        );

    }
    return (
        <>
            <section className="cart-section">

                <div className="cart-header">

                    <h1>

                        Shopping Cart

                    </h1>

                    <p>

                        Your keepsakes are almost ready 💙

                    </p>

                </div>

                <div className="cart-content">

                    <div className="cart-items">

                        {cartItems.map((item, index) => (

                            <CartItem
                                key={index}
                                item={item}
                                index={index}
                            />

                        ))}

                    </div>

                    <CartSummary

                        subtotal={subtotal}

                        onCheckout={handleCheckout}

                    />

                </div>
                        
            </section>
            {processing && (

                <OrderProcessing step={step} />

            )}
            <MessageDialog

                open={dialog.open}

                icon={dialog.icon}

                title={dialog.title}

                message={dialog.message}

                primaryButton={dialog.primaryButton}

                secondaryButton={dialog.secondaryButton}

            />

        </>
        

    );

}
