import "./Section5.css";

function Section5() {
  return (
    <section className="section5-container">
      <p className="heading-top">Your Stories</p>
      <h1 className="heading-main">
        Unutulmaz <span>Anlar</span>
      </h1>
      <div className="comments">
        <div className="comment">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “The dinner we had at TERRA was one of the most wonderful moments of
            the year. Every dish was a work of art.”
          </p>
          <div className="name-city">
            <span>Emily R.</span>
            <span>Berlin</span>
          </div>
        </div>
        <div className="comment">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “TERRA is a culinary gem. The flavors are so pure and the atmosphere
            is perfect for a romantic evening.”
          </p>
          <div className="name-city">
            <span>Michael S.</span>
            <span>New York</span>
          </div>
        </div>
        <div className="comment">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            “The service at TERRA is impeccable. It's clear that the team is
            passionate about providing an exceptional dining experience.”
          </p>
          <div className="name-city">
            <span>Sarah J.</span>
            <span>Los Angeles</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
