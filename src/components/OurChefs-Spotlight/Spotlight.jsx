import "./Spotlight.css";
import chef_data from "../../pages/OurChefs/OurChefsData";

function Spotlight() {
  const chef1 = chef_data[0];

  return (
    <section className="spotlight-container">
      <div className="image">
        <img src={chef1.image} alt={chef1.name} />
      </div>
      <div className="chef-info">
        <h2>chef spotlight</h2>
        <h1>{chef1.name}</h1>
        <div className="role-experience">
          <p>{chef1.role}</p>
          <p>{chef1.experience}</p>
        </div>
        <span className="line-separator"></span>
        <p className="bio">
          Born in Rome, trained in Paris under two Michelin-starred kitchens,
          and ultimately drawn to Istanbul by its extraordinary culinary
          diversity. Marco's philosophy is deceptively simple: let the
          ingredients speak, and never interrupt them. Today, his tasting menu
          at TERRA is regarded as one of the finest dining experiences in
          Europe.
        </p>
        <div className="skills-awards">
          <div className="skills">
            {chef1.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="awards">
            {chef1.awards.map((award) => (
              <div key={award.year} className="award">
                <span className="award-year">{award.year}</span>
                <p className="award-title">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spotlight;
