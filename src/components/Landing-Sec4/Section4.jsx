import "./Section4.css";
import chef from "../../assets/Landing-images/chef.jpg";

function Section4() {
  return (
    <section className="section4-container">
      <div className="chef-info">
        <p>Heart of our kitchen</p>
        <h1>Marco Bellini</h1>
        <span>Head Chef · 12 Years of Experience</span>
        <span className="bracket"></span>
        <p>
          Born in Rome, raised in Paris, and inspired by Istanbul’s rich
          culinary culture, Marco takes diners on an intercontinental journey
          with every recipe. For him, food is not just sustenance,it is a form
          of expression.
        </p>
        <div className="awards">
          <div className="award">
            <span>2023</span>
            <p>European Fine Dining Awards — Best Chef</p>
          </div>
          <div className="award">
            <span>2022</span>
            <p>Gault & Millau — 3-Hat Award</p>
          </div>
          <div className="award">
            <span>2021</span>
            <p>Istanbul Gastronomy Festival — Golden Fork</p>
          </div>
          <div className="award">
            <span>2020</span>
            <p>World’s 50 Best Restaurants — Rising Star Chef</p>
          </div>
        </div>
      </div>
      <div className="chef-image">
        <img src={chef} alt="Chef Marco Bellini" />
      </div>
    </section>
  );
}

export default Section4;
