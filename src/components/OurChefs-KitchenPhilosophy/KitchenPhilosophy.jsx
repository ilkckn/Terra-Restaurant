import "./KitchenPhilosophy.css";

function KitchenPhilosophy() {
  return (
    <section className="kitchen-philosophy-container">
      <header>
        <p className="top-header">How We Think About Food</p>
        <div className="main-header">
          <h1>Our</h1>
          <h1>Kitchen Philosophy</h1>
        </div>
      </header>
      <div className="content">
        <div className="philosophy">
          <div className="box">
            <p className="number">01</p>
            <h2>"What does the ingredient want to be?"</h2>
            <p>
              Before any technique, our chefs ask one question. The answer
              guides every decision from cooking time to garnish to the plate it
              arrives on.
            </p>
            <p className="name">
              <span></span> Marco Bellini
            </p>
          </div>
          <div className="box">
            <p className="number">02</p>
            <h2>
              "Simplicity is not the absence of effort it's the result of it."
            </h2>
            <p>
              A dish with three components that harmonize perfectly is harder to
              achieve than one with twelve. We cook toward clarity, not
              complexity.
            </p>
            <p className="name">
              <span></span> Leila Şahin
            </p>
          </div>
          <div className="box">
            <p className="number">03</p>
            <h2>
              "Dessert is not an afterthought — it's the last impression."
            </h2>
            <p>
              Guests remember the last thing they eat. That's why the pastry
              kitchen at TERRA gets the same attention, the same ingredients,
              and the same standards as everything that comes before it.
            </p>
            <p className="name">
              <span></span> Kenji Tanaka
            </p>
          </div>
          <div className="box">
            <p className="number">04</p>
            <h2>"Fire is the oldest technique. Respect it."</h2>
            <p>
              Every culture that ever cooked used fire. At TERRA, we study it
              the way a musician studies an instrument with discipline,
              patience, and deep respect for what it can and cannot do.
            </p>
            <p className="name">
              <span></span> Tarık Yıldız
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KitchenPhilosophy;
