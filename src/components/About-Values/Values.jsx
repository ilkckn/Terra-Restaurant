import "./Values.css";

function Values() {
  return (
    <section className="values-container">
      <header>
        <span className="top-bar">what we stand for</span>
        <div className="main-header">
          <h1>our</h1>
          <h1>values</h1>
        </div>
      </header>
      <div className="values">
        <div className="value">
          <p className="num">01</p>
          <h2>honest ingredients</h2>
          <p>
            Every ingredient on your plate has a name, a place, and a season. We
            work directly with local farmers and producers who share our respect
            for the land.
          </p>
          <span></span>
        </div>
        <div className="value">
          <p className="num">02</p>
          <h2>craftsmanship</h2>
          <p>
            Our chefs are artisans who blend tradition with innovation, using
            time-honored techniques to create dishes that are both familiar and
            exciting.
          </p>
          <span></span>
        </div>
        <div className="value">
          <p className="num">03</p>
          <h2>sustainability</h2>
          <p>
            We are committed to minimizing our environmental impact through
            responsible sourcing, waste reduction, and supporting eco-friendly
            practices throughout our supply chain.
          </p>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Values;
