import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
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

        <button className="shop-button">
            <span>SHOP</span>
            <span>NOW</span>
        </button>

      </div>
    </section>
  );
}

export default Hero;