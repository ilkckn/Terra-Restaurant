import "./Section6.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Section6() {
  return (
    <section className="section6-container">
      <div className="content-top">
        <p>special moments</p>
        <h2>
          Unforgettable <span>Nights</span>
        </h2>
        <h2>We're Here for You</h2>
        <div className="desc-phone">
          <p>
            Every special moment deserves a personalized experience. The TERRA
            team works with you to design your most important evenings.
          </p>
          <div className="phone">
            <p className="p-par">event line</p>
            <p className="p-par">(555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="content-mid">
        <div className="box">
          <p className="number">01</p>
          <h2>birthday celebration</h2>
          <p className="desc">
            Make your special evening with loved ones even more memorable in the
            warm ambiance of TERRA.
          </p>
          <ul>
            <li>Custom decor</li>
            <li>Custom cake & champagne</li>
            <li>VIP seating area</li>
          </ul>
          <p className="more-information">
            more information <MdOutlineArrowRightAlt className="arrow-icon" />
          </p>
        </div>
        <div className="box">
          <p className="number">02</p>
          <h2>Business Lunches & Corporate Events</h2>
          <p className="desc">
            Conduct your job interviews in TERRA’s prestigious setting.
          </p>
          <ul>
            <li>Private room rental</li>
            <li>Corporate menu options</li>
            <li>Projection & Technical Support</li>
          </ul>
          <p className="more-information">
            more information <MdOutlineArrowRightAlt className="arrow-icon" />
          </p>
        </div>
        <div className="box">
          <p className="number">03</p>
          <h2>Romantic Evening & Proposal</h2>
          <p className="desc">
            Ask the most important question of your life in TERRA’s enchanting
            atmosphere.
          </p>
          <ul>
            <li>Rose & Candle Decor</li>
            <li>Champagne & a bouquet of flowers</li>
            <li>Covert coordination</li>
          </ul>
          <p className="more-information">
            more information <MdOutlineArrowRightAlt className="arrow-icon" />
          </p>
        </div>
      </div>

      <div className="content-bottom">
        <p>
          Planning a different kind of event? <span>Let’s talk.</span>
        </p>
        <button>Contact Us</button>
      </div>
    </section>
  );
}

export default Section6;
