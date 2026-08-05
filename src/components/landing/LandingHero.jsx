import "./LandingHero.css";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";

function LandingHero() {
  return (
    <section className="landing">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO ================= */}

      <div className="hero-wrapper">

        <div className="hero-card">

          <div className="hero-heart">
            ♡
          </div>

          <h1 className="hero-title">
            Little things
            <br />
            and moments
            <br />
            aren't little.
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-subtitle">
            Tiny magnets.
            <br />
            Lifelong memories.
          </p>

          <Link
              to="/shop"
              className="shop-circle"
          >
            <span>SHOP</span>
            <span>NOW</span>
          </Link>

        </div>

      </div>

      {/* Decorative background shapes */}

      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>

      <div className="bg-line line-1"></div>
      <div className="bg-line line-2"></div>

    </section>
  );
}

export default LandingHero;