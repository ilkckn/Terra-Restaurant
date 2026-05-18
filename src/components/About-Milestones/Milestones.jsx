import "./Milestones.css";

function Milestones() {
  return (
    <section className="milestones-container">
      <header>
        <p>our journey</p>
        <h1>
          Twelve Years of <span>Excellence</span>
        </h1>
      </header>
      <div className="content">
        <div className="milestone">
          <div className="year">
            <p>2012</p>
          </div>
          <div className="inner-content">
            <h2>TERRA Opens Its Doors</h2>
            <p>
              A 20-seat dining room in Nişantaşı, Istanbul. The first guests
              waited three weeks for a reservation.
            </p>
          </div>
        </div>
        <div className="milestone">
          <div className="year">
            <p>2015</p>
          </div>
          <div className="inner-content">
            <h2>Golden Fork — Istanbul Gastronomy Festival</h2>
            <p>
              Our tasting menu was awarded Best Fine Dining Experience in Turkey
              for the first time.
            </p>
          </div>
        </div>
        <div className="milestone">
          <div className="year">
            <p>2018</p>
          </div>
          <div className="inner-content">
            <h2>Expansion & New Wine Cellar</h2>
            <p>
              TERRA expanded to 60 seats and introduced its private wine cellar
              room for exclusive dining events.
            </p>
          </div>
        </div>
        <div className="milestone">
          <div className="year">
            <p>2021</p>
          </div>
          <div className="inner-content">
            <h2>Gault & Millau — 3 Hat Award</h2>
            <p>
              Chef Marco Bellini received the prestigious 3-Hat recognition from
              Gault & Millau Europe.
            </p>
          </div>
        </div>
        <div className="milestone">
          <div className="year">
            <p>2023</p>
          </div>
          <div className="inner-content">
            <h2>European Fine Dining Awards — Best Chef</h2>
            <p>
              Marco Bellini named Best Chef in Europe. TERRA celebrated its
              10,000th guest the same year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Milestones;
