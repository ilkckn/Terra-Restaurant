import "./Home.css";
import wine from "../../assets/Landing-images/wine.jpg";
import dish from "../../assets/Landing-images/dish.jpg";
import chef from "../../assets/Landing-images/chef.jpg";
import Intermediate from "../../components/Landing-Sec2/Intermediate";
import Section3 from "../../components/Landing-Sec3/Section3";
import Section4 from "../../components/Landing-Sec4/Section4";
import Section5 from "../../components/Landing-Sec5/Section5";
import Section6 from "../../components/Landing-Sec6/Section6";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <div className="home-first-content">
        <div className="home-left-content">
          <p className="heading-top">
            <span></span>
            fine dining
          </p>
          <div className="heading-main">
            <h1>Earth's</h1>
            <h1>
              Most <span>Honest</span>
            </h1>
            <h1>Flavors</h1>
          </div>
          <p className="desc">
            We believe the finest ingredients need no disguise. At TERRA, honest
            flavors and quiet craftsmanship turn every dinner into something
            unforgettable.
          </p>
          <div className="btns">
            <button onClick={() => navigate("/menu")}>Discover Menu</button>
            <button onClick={() => navigate("/story")}>Our Story</button>
          </div>
        </div>

        <div className="home-right-content">
          <span className="collage-watermark">TERRA</span>
          <div className="photos">
            <div className="photo photo-back">
              <div className="photo-img">
                <img src={wine} alt="Wine selection" />
              </div>
              <p className="photo-caption">Wine Selection</p>
            </div>

            <div className="photo photo-mid">
              <div className="photo-img">
                <img src={dish} alt="Signature dish" />
              </div>
              <p className="photo-caption">Signature Dish</p>
            </div>

            <div className="photo photo-front">
              <div className="photo-img">
                <img src={chef} alt="Our chef" />
                <span className="photo-placeholder">👨‍🍳</span>
              </div>
            </div>
          </div>
          <div className="floating-tag">
            <span className="tag-dot"></span>
            <span className="tag-text">Tables Available</span>
          </div>
        </div>
      </div>

      <div className="home-second-content">
        <Intermediate />
      </div>

      <div className="home-third-content">
        <Section3 />
      </div>

      <div className="home-fourth-content">
        <Section4 />
      </div>

      <div className="home-fifth-content">
        <Section5 />
      </div>

      <div className="home-sixth-content">
        <Section6 />
      </div>
    </section>
  );
}

export default Home;
