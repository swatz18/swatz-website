import { Link } from "react-router-dom";

export default function CartSummary({

    subtotal,
    onCheckout

})  {
    const handleContinue = () => {

        setProcessing(true);

        setStep(1);

        setTimeout(() => {

            setStep(2);

        }, 1000);

        setTimeout(() => {

            setStep(3);

        }, 2000);

        setTimeout(() => {

            alert("WhatsApp will open here.");

        }, 3000);

    };

    return (

        <div className="cart-summary">

            <h3>

                Order Summary

            </h3>

            <div className="summary-row">

                <span>

                    Subtotal

                </span>

                <strong>

                    ₹{subtotal}

                </strong>

            </div>

            <div className="cart-summary-buttons">

                <Link
                    to="/shop"
                    className="continue-shopping-btn"
                >

                    ← Continue Shopping

                </Link>

                <button

                    className="continue-whatsapp-btn"

                    onClick={onCheckout}

                >

                    Continue to WhatsApp →

                </button>

            </div>

        </div>

    );

}