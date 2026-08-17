import "./Footer.css";
import {
    Instagram,
    MessageCircle,
    Mail,
    ArrowUp
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (

        <footer className="footer">

            {/* =========================
                FOOTER INTRO
            ========================= */}

            <div className="footer-top">

                <span className="footer-tag">

                    ✦ Memories Made Here ✦

                </span>

                <h2>

                    Little things &
                    <br />
                    Little moments aren't little.

                </h2>

                <p>

                    Thank you for choosing Swatz! 💙

                </p>

            </div>


            {/* =========================
                HELP
            ========================= */}

            <div className="footer-links">

                <div className="footer-help">

                    <h4>Help</h4>

                    <div className="footer-help-links">
                        
                        
                        <Link
                            to={{
                                pathname: "/contact"
                            }}
                        >
                            Contact Us
                        </Link>
                        
                       
                        <Link
                            to={{
                                pathname: "/help",
                                hash: "#shipping"
                            }}
                        >
                            Shipping
                        </Link>

                        <Link
                            to={{
                                pathname: "/help",
                                hash: "#faq"
                            }}
                        >
                            FAQs
                        </Link>

                        <Link
                            to={{
                                pathname: "/help",
                                hash: "#privacy"
                            }}
                        >
                            Privacy Policy
                        </Link>

                    </div>

                </div>


                {/* =========================
                    CONNECT
                ========================= */}

                <div className="footer-connect-section">

                    <h4>Connect</h4>

                    <div className="footer-connect">

                        <a
                            href="https://www.instagram.com/swatz_magnets/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <Instagram size={17} />

                            swatz_magnets

                        </a>

                        <a
                            href="https://wa.me/919489771802"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <MessageCircle size={17} />

                            WhatsApp

                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=swatzmagnets@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail size={17} />
                            swatzmagnets@gmail.com
                        </a>

                    </div>

                </div>

            </div>


            {/* =========================
                TRUST STRIP
            ========================= */}

            <div className="footer-trust">

                <span>
                    🚚 Pan India Delivery
                </span>

                <span>
                    🔒 Secure Payments
                </span>

                <span>
                    💙 Handmade with Love
                </span>

            </div>


            {/* =========================
                FOOTER BOTTOM
            ========================= */}

            <div className="footer-bottom">

                <span>
                    © 2026 Swatz Magnets
                </span>

            </div>


            {/* =========================
                BACK TO TOP
            ========================= */}

            <button
                className="back-to-top"
                onClick={scrollToTop}
                aria-label="Back to top"
            >

                <ArrowUp size={18} />

            </button>

        </footer>

    );

}