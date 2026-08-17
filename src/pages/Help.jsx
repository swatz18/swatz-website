import "./Help.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";

const faqs = [
    {
        question: "How do I place an order?",
        answer:
            "Choose your product, select the required options, personalise it and add it to your cart. Complete checkout via whatsapp to place your order."
    },
    {
        question: "Can I customise my product?",
        answer:
            "Yes! Most Swatz products can be personalised with photos, names, dates, messages or themes, depending on the product."
    },
    {
        question: "What should I check before placing my order?",
        answer:
            "Please double-check your photos, names, dates, spellings and other personalisation details before placing your order."
    },
    {
        question: "Can I order multiple products together?",
        answer:
            "Yes! You can add different products to your cart and place them together in one order."
    },
    {
        question: "Do you accept bulk orders?",
        answer:
            "Yes! We accept bulk and customised orders for events, businesses, celebrations and gifting. Reach out to us on WhatsApp for bulk requirements and pricing."
    },
    {
        question: "Can I cancel my order?",
        answer:
            "Because our products are personalised and made specifically for you, orders cannot be cancelled once production has started."
    },
    {
        question: "What if my order arrives damaged or I receive the wrong product?",
        answer:
            "We're happy to look into it. Please contact us within 48 hours of receiving your order with your order details and photos or videos of the issue, and we'll help you with the next steps."
    }
];

export default function Help() {

    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const id = location.hash.substring(1);

        setTimeout(() => {
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }, 100);
    }, [location.hash]);

    const [openFaq, setOpenFaq] = useState(null);
    useEffect(() => {

        const hash = window.location.hash;

        if (hash) {

            const element = document.querySelector(hash);

            if (element) {

                setTimeout(() => {

                    element.scrollIntoView({
                        behavior: "smooth"
                    });

                }, 100);

            }

        }

    }, []);

    const toggleFaq = (index) => {

        setOpenFaq(
            openFaq === index ? null : index
        );

    };

    return (

        <>
            <Navbar />

            <main className="help-page">

                {/* =========================
                    PAGE INTRO
                ========================= */}

                <section className="help-hero">

                    <span className="help-eyebrow">
                        ✦ We're Here to Help ✦
                    </span>
                    <p className="help-hero-text">
                        Everything you need to know about ordering from Swatz
                    </p>

                </section>


                {/* =========================
                    SHIPPING
                ========================= */}

                <section
                    className="help-section"
                    id="shipping"
                >

                    <div className="help-section-heading">

                        <span className="help-section-icon">
                            🚚
                        </span>

                        <div>

                            <span className="help-label">
                                Shipping & Delivery
                            </span>

                            <h2>
                                Made with care.
                                Delivered with love.
                            </h2>

                        </div>

                    </div>


                    <div className="shipping-grid">

                        <div className="help-info-card">

                            <h3>
                                Where do we deliver?
                            </h3>

                            <p>
                                We currently deliver across India. 🇮🇳
                            </p>

                        </div>


                        <div className="help-info-card">

                            <h3>
                                How long does it take?
                            </h3>

                            <p>
                                Since every Swatz product is personalised,
                                we usually need <strong>3–5 days</strong>
                                to create and prepare your order.
                            </p>

                            <small>
                                Production time may vary for large or
                                bulk orders.
                            </small>

                        </div>


                        <div className="help-info-card">

                            <h3>
                                Will I get tracking details?
                            </h3>

                            <p>
                                Once your order is shipped, we'll share
                                the available tracking details with you.
                            </p>

                        </div>


                        <div className="help-info-card">

                            <h3>
                                Need it by a specific date?
                            </h3>

                            <p>
                                Reach out to us on WhatsApp before placing
                                your order. We'll do our best to help.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =========================
                    FAQ
                ========================= */}

                <section
                    className="help-section"
                    id="faq"
                >

                    <div className="help-section-heading">

                        <span className="help-section-icon">
                            ❓
                        </span>

                        <div>

                            <span className="help-label">
                                Frequently Asked
                            </span>

                            <h2>
                                Got a question?
                            </h2>

                        </div>

                    </div>


                    <div className="faq-list">

                        {faqs.map((faq, index) => (

                            <div
                                className={`faq-item ${
                                    openFaq === index ? "open" : ""
                                }`}
                                key={faq.question}
                            >

                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={openFaq === index}
                                >

                                    <span>
                                        {faq.question}
                                    </span>

                                    <span className="faq-icon">
                                        {openFaq === index ? "−" : "+"}
                                    </span>

                                </button>


                                <div className="faq-answer">

                                    <p>
                                        {faq.answer}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>


                {/* =========================
                    PRIVACY
                ========================= */}

                <section
                    className="help-section"
                    id="privacy"
                >

                    <div className="help-section-heading">

                        <span className="help-section-icon">
                            🔒
                        </span>

                        <div>

                            <span className="help-label">
                                Your Privacy
                            </span>

                            <h2>
                                Your memories stay yours.
                            </h2>

                        </div>

                    </div>


                    <div className="privacy-card">

                        <p>
                            <strong>Your privacy matters to us.</strong>
                        </p>

                        <p>
                            We collect only the information needed to
                            process and deliver your order, such as your
                            name, contact details, delivery information,
                            photos and personalisation details.
                        </p>

                        <p>
                            Your photos and personalisation details are
                            used only to create your order. We will never
                            use your photos on our social media or marketing
                            channels without your permission.
                        </p>

                        <p>
                            Once your order has been completed, the photos
                            you shared with us will be deleted from our end.
                        </p>

                        <p>
                            We may share only the necessary order information
                            with trusted service providers involved in
                            payment and delivery.
                        </p>

                        <p>
                            <strong>
                                We do not sell your personal information.
                            </strong>
                        </p>

                    </div>

                </section>
                <section className="help-section help-whatsapp">

                    <span className="help-section-label">
                        STILL NEED HELP?
                    </span>

                    <h2>
                        We're just a message away.
                    </h2>

                    <p>
                        Didn't find what you were looking for?
                        Reach out to us on WhatsApp and we'll be happy to help.
                    </p>

                    <a
                        href="https://wa.me/919489771802"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="help-whatsapp-button"
                    >
                        💬 Connect via WhatsApp
                    </a>

                </section>

            </main>

            <Footer />

        </>

    );

}