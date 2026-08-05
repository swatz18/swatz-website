import "./Cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { getCart } from "../../services/cartService";
import { useState } from "react";
import OrderProcessing from "../order/OrderProcessing";
import { saveOrder } from "../../services/googleService";


export default function Cart() {
    const cartItems = getCart();
    const [processing, setProcessing] = useState(false);
    const [step, setStep] = useState(0);

    const subtotal = cartItems.reduce(

        (total, item) => total + item.price * item.quantity,

        0

    );
    const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

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

        if (!result.success) {

            setProcessing(false);

            alert("We couldn't prepare your order right now. Please try again.");

            return;

        }

        const referenceId = result.referenceId;

        await delay(1000);

        setStep(3);

        const orderSummary = cartItems
            .map(
                item =>
                    `• ${item.title} ×${item.quantity} — ₹${item.price * item.quantity}`
            )
            .join("\n");

        const message = encodeURIComponent(

    `Hi Swatz! 💙

    I'd like to place an order.

    Reference ID:
    ${referenceId}

    Items:
    ${orderSummary}

    Subtotal:
    ₹${subtotal}

    Thank you!`

        );

        await delay(800);

        window.open(
            `https://wa.me/917502131997?text=${message}`,
            "_blank"
        );

        setProcessing(false);

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

        </>
        

    );

}