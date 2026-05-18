import CTA from "../../components/About-CTA/CTA";
import Milestones from "../../components/About-Milestones/Milestones";
import Story from "../../components/About-Story/Story";
import Team from "../../components/About-Team/Team";
import Values from "../../components/About-Values/Values";
import "./About.css";

function About() {
  return (
    <section className="about-container">
      <div className="hero">
        <div className="left-content">
          <div className="top-bar">
            <span></span>
            <p>our story</p>
          </div>
          <div className="main-header">
            <h1>more than</h1>
            <h1>
              a <span>restaurant</span>
            </h1>
          </div>
          <p>
            TERRA is a place where the earth's finest ingredients meet quiet
            craftsmanship and every guest leaves with a story worth telling.
          </p>
        </div>
        <div className="right-content">
          <div className="info">
            <span>2012</span>
            <p>founded in istanbul</p>
          </div>
          <div className="info">
            <span>3</span>
            <p>international awards</p>
          </div>
          <div className="info">
            <span>18</span>
            <p>passionate team members</p>
          </div>
          <div className="info">
            <span>240</span>
            <p>unique recipes crafted</p>
          </div>
        </div>
      </div>

      <div className="story">
        <Story />
      </div>
      <div className="values">
        <Values />
      </div>
      <div className="team">
        <Team />
      </div>
      <div className="milestones">
        <Milestones />
      </div>
      <div className="CTA">
        <CTA />
      </div>
    </section>
  );
}

export default About;
