import "./PlatingSeries.css";
import plating1 from "../../assets/Gallery-images/empty-plate.jpg";
import plating2 from "../../assets/Gallery-images/sauce-plate.jpg";
import plating3 from "../../assets/Gallery-images/garnish.jpg";
import plating4 from "../../assets/Gallery-images/candle.jpg";

function PlatingSeries() {
  return (
    <section className="plating-series-container">
      <div className="header">
        <p>Plating Series</p>
        <h1>
          The Art of the <span>final Touch</span>
        </h1>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="image">
            <img src={plating1} alt="Empty Plate" />
          </div>
          <div className="info">
            <p className="number">001</p>
            <h2>The Negative Space</h2>
            <p className="desc">
              Plate as canvas. What's left empty is as deliberate as what's
              placed.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={plating2} alt="Sauce Plate" />
          </div>
          <div className="info">
            <p className="number">002</p>
            <h2>The Sauce Work</h2>
            <p className="desc">
              Every smear, drop, and pool is placed by hand. Never poured.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={plating3} alt="Garnish" />
          </div>
          <div className="info">
            <p className="number">003</p>
            <h2>The Garnish Edit</h2>
            <p className="desc">
              If it doesn't taste like something, it doesn't belong on the
              plate.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={plating4} alt="Candle" />
          </div>
          <div className="info">
            <p className="number">004</p>
            <h2>The Lighting Moment</h2>
            <p className="desc">
              Every dish is photographed under the same light it's served in. No
              studio tricks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatingSeries;
