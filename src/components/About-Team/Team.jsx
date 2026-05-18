import "./Team.css";
import team_data from "./TeamData.js";

function Team() {
  return (
    <section className="team-container">
      <header>
        <p>the people behind every plate</p>
        <h1>
          meet our <span>team</span>
        </h1>
      </header>
      <div className="team">
        {team_data.map((member) => (
          <div className="chef-team" key={member.id}>
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="info">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
