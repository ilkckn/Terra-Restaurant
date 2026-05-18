import "./Story.css";
import story_image from "../../assets/About-images/story-restaurant.jpg";
import story_image1 from "../../assets/About-images/story-restaurant-1.jpg";

function Story() {
  return (
    <section className="story-container">
      <div className="content-left">
        <span className="top-bar">how it began</span>
        <div className="main-header">
          <h1>a table,</h1>
          <h1>
            a <span>dream</span>
          </h1>
        </div>
        <p>
          TERRA was born from a simple conviction: that the finest meal is one
          that knows where it came from. In 2012, chef Marco Bellini left a
          Michelin-starred kitchen in Paris with one suitcase and one idea to
          open a restaurant that told the story of the earth on every plate.
        </p>
        <p>
          What started as an intimate 20-seat dining room in Nişantaşı grew into
          one of Istanbul's most celebrated fine dining experiences. Today,
          TERRA serves over 10,000 guests each year,yet every meal still feels
          like the first one.
        </p>
        <div className="chefs-word">
          <p>
            "I never wanted to cook food. I wanted to cook stories — and let the
            land do the talking."
          </p>
          <span className="chefs-name">
            — Marco Bellini, Founder & Head Chef
          </span>
        </div>
      </div>

      <div className="content-right">
        <img src={story_image} alt="TERRA Story" />
        <img src={story_image1} alt="TERRA Story 1" />
      </div>
    </section>
  );
}

export default Story;
