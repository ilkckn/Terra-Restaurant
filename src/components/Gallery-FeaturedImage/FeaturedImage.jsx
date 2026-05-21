import "./FeaturedImage.css";
import featured_img from "../../assets/Gallery-images/charred_vegetables_fine_dining.jpg";

function FeaturedImage() {
  return (
    <section className="featured-image-container">
      <div className="image">
        <img src={featured_img} alt="Featured Image" />
      </div>
      <div className="info">
        <h2>photo of the month</h2>
        <div className="title">
          <h1>burnt leak</h1>
          <h1> bone marrow & sea salt</h1>
        </div>
        <p>
          A winter signature. The leek spends 40 minutes directly on the coals
          until the outer layers are completely carbonised. What remains inside
          is silk.
        </p>
        <span></span>
        <div className="other-info">
          <div className="chef">
            <p>chef</p>
            <p>marco bellini</p>
          </div>
          <div className="season">
            <p>season</p>
            <p>winter 2024</p>
          </div>
          <div className="category">
            <p>category</p>
            <p>signature dish</p>
          </div>
          <div className="technique">
            <p>technique</p>
            <p>
              live fire <span></span> reduction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedImage;
