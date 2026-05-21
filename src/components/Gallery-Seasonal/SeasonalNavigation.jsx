import "./SeasonalNavigation.css";

function SeasonalNavigation() {
  return (
    <section className="seasonal-navigation-container">
      <div className="box">
        <p className="spring">spring</p>
        <h2>the awakening menu</h2>
        <span>4 photos</span>
      </div>
      <div className="box">
        <p className="summer">summer</p>
        <h2>fire & open air</h2>
        <span>1 photo</span>
      </div>
      <div className="box">
        <p className="autumn">autumn</p>
        <h2>the harvest collection</h2>
        <span>2 photos</span>
      </div>
      <div className="box">
        <p className="winter">winter</p>
        <h2>smoke, embers & warmth</h2>
        <span>2 photos</span>
      </div>
    </section>
  );
}

export default SeasonalNavigation;
