import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
    
    const { cartCount } = useCart();

    return (
        <div className="navbar-wrapper">
          
          <nav className="landing-navbar">

              <Link
                  to="/"
                  className="landing-logo"
              >
                  SWATZ
              </Link>

              <ul className="landing-menu">

                  <li>

                      <NavLink
                          to="/about"
                          className={({ isActive }) =>
                              isActive ? "nav-active" : ""
                          }
                      >
                          ABOUT
                      </NavLink>

                  </li>

                  <li>

                      <NavLink
                          to="/shop"
                          className={({ isActive }) =>
                              isActive ? "nav-active" : ""
                          }
                      >
                          SHOP
                      </NavLink>

                  </li>

                  <li>

                      <NavLink
                          to="/contact"
                          className={({ isActive }) =>
                              isActive ? "nav-active" : ""
                          }
                      >
                          CONTACT
                      </NavLink>

                  </li>

              </ul>

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
        </div>
    );

}