import "./Brigade.css";
import chef_data from "../../pages/OurChefs/OurChefsData";

function Brigade() {
  return (
    <section className="brigade-container">
      <header>
        <p className="top-bar">the full brigade</p>
        <div className="main-header">
          <h1>Every Chef</h1>
          <h1>
            a <span>Specialist</span>
          </h1>
        </div>
      </header>
      <div className="chefs">
        {chef_data.slice(1, 7).map((chef) => (
          <div key={chef.name} className="chef-card">
            <div className="image">
              <img src={chef.image} alt={chef.name} />
            </div>
            <div className="info">
              <h2>{chef.name}</h2>
              <p>{chef.role}</p>
              <p>{chef.bio}</p>
              <div className="skills">
                {chef.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brigade;
