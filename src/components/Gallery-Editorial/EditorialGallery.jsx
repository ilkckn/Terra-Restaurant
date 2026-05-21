import "./EditorialGallery.css";
import terraGalleryData from "../../pages/Gallery/GalleryData";
import { useNavigate } from "react-router-dom";

const LAYOUT = [
  { id: 2, size: "wide", imgSize: "tall" },
  { id: 4, size: "narrow", imgSize: "tall" },

  { id: 5, size: "narrow", imgSize: "mid" },
  { id: 6, size: "narrow", imgSize: "mid" },
  { id: 11, size: "narrow", imgSize: "mid" },

  { id: 3, size: "half", imgSize: "mid" },
  { id: 10, size: "half", imgSize: "mid" },

  { id: 7, size: "third", imgSize: "mid" },
  { id: 8, size: "third", imgSize: "mid" },
  { id: 9, size: "third", imgSize: "mid" },
];

function getBadgeClass(badgeStyle) {
  const map = {
    terra: "eg-badge--terra",
    dark: "eg-badge--dark",
    gold: "eg-badge--gold",
    sage: "eg-badge--sage",
  };
  return map[badgeStyle] || "eg-badge--dark";
}

function GalleryCard({ item, size, imgSize }) {
  const isWide = size === "wide";

  const imageEl = (
    <div className={`eg-img${isWide ? "" : ` eg-img--${imgSize}`}`}>
      {item.badge && (
        <span className={`eg-badge ${getBadgeClass(item.badgeStyle)}`}>
          {item.badge}
        </span>
      )}
      <img src={item.imageUrl} alt={item.imageAlt} loading="lazy" />
    </div>
  );

  const bodyEl = (
    <div className="eg-body">
      <span className="eg-cat">{item.category}</span>
      <h3 className="eg-card-title">{item.title}</h3>
      <p className="eg-desc">{item.description}</p>
      <div className="eg-meta">
        <span className="eg-meta-chef">{item.chef}</span>
        <span className="eg-meta-dot" aria-hidden="true" />
        <span className="eg-meta-season">{item.season}</span>
      </div>
    </div>
  );

  return (
    <article className={`eg-card eg-card--${size}`}>
      {isWide ? (
        <div className="eg-card-inner">
          {imageEl}
          {bodyEl}
        </div>
      ) : (
        <>
          {imageEl}
          {bodyEl}
        </>
      )}
    </article>
  );
}

function EditorialGallery() {
  const dataMap = Object.fromEntries(
    terraGalleryData.map((item) => [item.id, item]),
  );
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/gallery/all-photos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="editorial-gallery-container">
      <div className="eg-header">
        <div className="eg-header-left">
          <span className="eg-tag">The Collection</span>
          <h2 className="eg-title">
            Recent <em>Shots</em>
          </h2>
        </div>
        <span className="eg-count" aria-hidden="true">
          20
        </span>
      </div>

      <div className="eg-grid">
        {LAYOUT.map(({ id, size, imgSize }) => {
          const item = dataMap[id];
          if (!item) return null;
          return (
            <GalleryCard
              key={item.id}
              item={item}
              size={size}
              imgSize={imgSize}
            />
          );
        })}
      </div>

      <div className="see-all">
        <button
          className="view-all-btn"
          onClick={handleNavigate}
        >
          View All Photos<span>&rarr;</span>
        </button>
      </div>
    </section>
  );
}

export default EditorialGallery;
