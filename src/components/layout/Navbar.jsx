import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function Navbar() {

    const { cartCount } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar-wrapper">

            <nav className="landing-navbar">

                {/* Mobile Hamburger */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen
                        ? <X size={23} />
                        : <Menu size={23} />
                    }
                </button>

                {/* Logo */}
                <Link
                    to="/"
                    className="landing-logo"
                    onClick={closeMenu}
                >
                    Swatz
                </Link>

                {/* Desktop Menu */}
                <ul className="landing-menu">

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "nav-active" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? "nav-active" : ""
                            }
                        >
                            Shop
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "nav-active" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                </ul>

                {/* Cart */}
                <Link
                    to="/cart"
                    className="landing-cart"
                >
                    <div className="cart-icon">

                        <ShoppingBag size={22} />

                        {cartCount > 0 && (
                            <span className="cart-badge">
                                {cartCount}
                            </span>
                        )}

                    </div>
                </Link>

            </nav>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu ${menuOpen ? "open" : ""}`}
            >

                {/* Close Button */}
                <button
                    className="mobile-menu-close"
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>

                {/* Center Logo */}
                <Link
                    to="/"
                    className="mobile-menu-logo"
                    onClick={closeMenu}
                >
                    Swatz
                </Link>

                {/* Menu Links */}
                <div className="mobile-menu-links">

                    <NavLink
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/shop"
                        onClick={closeMenu}
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>

                </div>

            </div>

        </div>
    );
}