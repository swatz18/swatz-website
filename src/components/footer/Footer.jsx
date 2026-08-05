import "./Footer.css";
import {
    Instagram,
    MessageCircle,
    Mail,
    ArrowUp
} from "lucide-react";

export default function Footer() {

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    };

    return (

        <footer className="footer">

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

                    Every keepsake begins with a memory,
                    and we're grateful to be a small part of yours.

                    <br /><br />

                    Thank you for choosing Swatz!

                </p>

            </div>

            <div className="footer-links">

                <div>

                    <h4>Shop</h4>

                    <a href="/">Fridge Magnets</a>

                    <a href="/">Keychains</a>

                    <a href="/">Badges</a>

                    <a href="/">Photo Strips</a>

                </div>

                <div>

                    <h4>Help</h4>

                    <a href="/">Shipping</a>

                    <a href="/">FAQs</a>

                    <a href="/">Contact Us</a>

                    <a href="/">Privacy Policy</a>

                </div>

                <div>

                    <h4>Connect</h4>

                    <a href="/">
                        <Instagram size={17}/>
                        Instagram
                    </a>

                    <a href="/">
                        <MessageCircle size={17}/>
                        WhatsApp
                    </a>

                    <a href="/">
                        <Mail size={17}/>
                        hello@swatz.in
                    </a>

                </div>

            </div>

            <div className="footer-trust">

                <span>🚚 Pan India Delivery</span>

                <span>💙 Handmade with Love</span>

                <span>🔒 Secure Payments</span>

            </div>

            <div className="footer-bottom">

                <p>

                    Crafted with love,
                    one memory at a time.

                </p>

                <span>

                    © 2026 Swatz Magnets

                </span>

            </div>

            <button
                className="back-to-top"
                onClick={scrollToTop}
            >

                <ArrowUp size={18}/>

            </button>

        </footer>

    );

}