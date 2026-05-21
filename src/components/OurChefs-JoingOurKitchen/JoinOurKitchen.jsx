import "./JoinOurKitchen.css";

function JoinOurKitchen() {
  return (
    <section className="join-our-kitchen-container">
      <div className="content-left">
        <p className="top-bar">join our kitchen</p>
        <div className="main-header">
          <h1>Cook with the</h1>
          <h1>
            <span>Best</span> in the Business
          </h1>
        </div>
        <p className="desc">
          We are always looking for cooks who are obsessive, humble, and hungry
          to learn. If you believe food is a craft worth a lifetime of study, we
          want to hear from you.
        </p>
        <button>Send your application</button>
      </div>
      <div className="content-right">
        <div className="content">
          <div className="icon">🎓</div>
          <div className="info">
            <h2>Culinary Training</h2>
            <p>
              Formal training preferred, but exceptional self-taught cooks are
              equally welcome. We value skill over credentials.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="icon">🌍</div>
          <div className="info">
            <h2>International Exposure</h2>
            <p>
              Experience in kitchens outside your home country is valued.
              Different cultures bring different ways of thinking about food.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="icon">🤝</div>
          <div className="info">
            <h2>Team First Mindset</h2>
            <p>
              A kitchen brigade only works when every person puts the team
              before themselves. Ego has no place at TERRA.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="icon">📚</div>
          <div className="info">
            <h2>Curiosity & Humility</h2>
            <p>
              The best chefs we know are still learning. If you think you know
              everything, we're probably not the right fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinOurKitchen;
