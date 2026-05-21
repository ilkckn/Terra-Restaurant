import "./Gallery.css";
import hero1 from "../../assets/Gallery-images/Dry-aged côte de boeuf.jpg";
import hero2 from "../../assets/Gallery-images/Caramelised Fig Tart.jpg";
import hero3 from "../../assets/Gallery-images/Langoustine, Saffron Broth.jpg";
import FeaturedImage from "../../components/Gallery-FeaturedImage/FeaturedImage";
import EditorialGallery from "../../components/Gallery-Editorial/EditorialGallery";
import PlatingSeries from "../../components/Gallery-Plating/PlatingSeries";
import SeasonalNavigation from "../../components/Gallery-Seasonal/SeasonalNavigation";

function Gallery() {
  return (
    <section className="gallery-container">
      <div className="hero">
        <div className="content-left">
          <div className="top-bar">
            <span></span>
            <p>visual stories</p>
          </div>
          <div className="main-header">
            <h1>The Art of</h1>
            <h1>Every Plate</h1>
          </div>
          <p>
            From the first fire of the morning to the last dessert of the night,
            every image here is a window into the TERRA kitchen. Real moments,
            real food, real craft.
          </p>
        </div>
        <div className="content-right">
          <p className="top-bar-2">Recently Added</p>
          <div className="recently-added">
            <div className="box">
              <img src={hero1} alt="Dry-aged côte de boeuf" />
              <div className="info">
                <h2>grill & fire</h2>
                <p>Dry-Aged Côte de Boeuf</p>
              </div>
            </div>
            <div className="box">
              <img src={hero2} alt="Caramelised Fig Tart" />
              <div className="info">
                <h2>seafood</h2>
                <p>Langoustine, Saffron Broth</p>
              </div>
            </div>
            <div className="box">
              <img src={hero3} alt="Langoustine, Saffron Broth" />
              <div className="info">
                <h2>pastry</h2>
                <p>Caramelised Fig Tart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <FeaturedImage />
      </div>
      <div className="editorial-gallery">
        <EditorialGallery />
      </div>
      <div className="plating-series">
        <PlatingSeries />
      </div>
      <div className="seasonal-navigation">
        <SeasonalNavigation />
      </div>
    </section>
  );
}

export default Gallery;
