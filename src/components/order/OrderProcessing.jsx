import "./OrderProcessing.css";

export default function OrderProcessing({ step }) {

    return (

        <div className="processing-overlay">

            <div className="processing-card">

                <div className="processing-heart">
                    💙
                </div>

                <h2>Preparing Your Order</h2>

                <p>Do not close/refresh the page.This may take a few minutes</p>

                <div className="processing-steps">

                    <div className={step >= 1 ? "done" : ""}>
                        {step >= 1 ? "✓" : "○"} Validating your order
                    </div>

                    <div className={step >= 2 ? "done" : step === 1 ? "active" : ""}>
                        {step >= 2 ? "✓" : step === 1 ? "⏳" : "○"} Creating your Order Reference
                    </div>

                    <div className={step >= 3 ? "done" : step === 2 ? "active" : ""}>
                        {step >= 3 ? "✓" : step === 2 ? "⏳" : "○"} Opening WhatsApp
                    </div>

                </div>

            </div>

        </div>

    );

}