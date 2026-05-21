import { useState, useMemo } from "react"
import "./AllPhotos.css"
import terraGalleryData from "../../pages/Gallery/GalleryData"

const CATEGORIES = [
  "All",
  "Signature Dishes",
  "Seafood",
  "Grill & Fire",
  "Pastry",
  "Seasonal",
  "Garde Manger",
  "Behind the Scenes",
  "Events & Private Dining",
  "Ingredients",
  "Plating Series",
  "Technique",
]

const SEASONS = ["All Seasons", "Spring", "Summer", "Autumn", "Winter", "All Year"]

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "chef", label: "By Chef" },
  { value: "season", label: "By Season" },
  { value: "year-desc", label: "Newest First" },
  { value: "year-asc", label: "Oldest First" },
]

function getBadgeClass(badgeStyle) {
  const map = {
    terra: "ap-card-badge--terra",
    dark: "ap-card-badge--dark",
    gold: "ap-card-badge--gold",
    sage: "ap-card-badge--sage",
  }
  return map[badgeStyle] || "ap-card-badge--dark"
}

// Grid icon SVG
function GridIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="0.5" />
      <rect x="9" y="1" width="6" height="6" rx="0.5" />
      <rect x="1" y="9" width="6" height="6" rx="0.5" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" />
    </svg>
  )
}

// List icon SVG
function ListIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="2" width="14" height="2.5" rx="0.5" />
      <rect x="1" y="6.8" width="14" height="2.5" rx="0.5" />
      <rect x="1" y="11.5" width="14" height="2.5" rx="0.5" />
    </svg>
  )
}

function GridCard({ item }) {
  return (
    <article className="ap-card">
      <div className="ap-card-img">
        {item.badge && (
          <span className={`ap-card-badge ${getBadgeClass(item.badgeStyle)}`}>
            {item.badge}
          </span>
        )}
        <img src={item.imageUrl} alt={item.imageAlt} loading="lazy" />
      </div>
      <div className="ap-card-body">
        <span className="ap-card-cat">{item.category}</span>
        <h3 className="ap-card-title">{item.title}</h3>
        <span className="ap-card-chef">{item.chef} · {item.season}</span>
      </div>
    </article>
  )
}

function ListCard({ item }) {
  return (
    <article className="ap-card">
      <div className="ap-card-img">
        {item.badge && (
          <span className={`ap-card-badge ${getBadgeClass(item.badgeStyle)}`}>
            {item.badge}
          </span>
        )}
        <img src={item.imageUrl} alt={item.imageAlt} loading="lazy" />
      </div>
      <div className="ap-card-body">
        <span className="ap-card-cat">{item.category}</span>
        <h3 className="ap-card-title">{item.title}</h3>
        <p className="ap-card-desc">{item.description}</p>
      </div>
      <div className="ap-card-meta">
        <div className="ap-card-meta-row">
          <span className="ap-card-meta-key">Chef</span>
          <span className="ap-card-meta-val">{item.chef}</span>
        </div>
        <div className="ap-card-meta-row">
          <span className="ap-card-meta-key">Season</span>
          <span className="ap-card-meta-val">{item.season}</span>
        </div>
        <div className="ap-card-meta-row">
          <span className="ap-card-meta-key">Year</span>
          <span className="ap-card-meta-val">{item.year}</span>
        </div>
      </div>
    </article>
  )
}

function AllPhotos() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeSeason, setActiveSeason] = useState("All Seasons")
  const [sortBy, setSortBy] = useState("default")
  const [view, setView] = useState("grid") // "grid" | "list"

  const filtered = useMemo(() => {
    let result = [...terraGalleryData]

    // Kategori filtresi
    if (activeCategory !== "All") {
      result = result.filter(item => item.category === activeCategory)
    }

    // Sezon filtresi
    if (activeSeason !== "All Seasons") {
      result = result.filter(item => item.season === activeSeason)
    }

    // Sıralama
    switch (sortBy) {
      case "chef":
        result.sort((a, b) => a.chef.localeCompare(b.chef))
        break
      case "season":
        const seasonOrder = { Spring: 1, Summer: 2, Autumn: 3, Winter: 4, "All Year": 5 }
        result.sort((a, b) => (seasonOrder[a.season] || 6) - (seasonOrder[b.season] || 6))
        break
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "year-asc":
        result.sort((a, b) => a.year - b.year)
        break
      default:
        break
    }

    return result
  }, [activeCategory, activeSeason, sortBy])

  return (
    <div className="all-photos-page">

      {/* ── HERO ── */}
      <div className="ap-hero">
        <div className="ap-hero-top">
          <nav className="ap-breadcrumb">
            <a href="/">Home</a>
            <span className="ap-breadcrumb-sep">—</span>
            <a href="/gallery">Gallery</a>
            <span className="ap-breadcrumb-sep">—</span>
            <span className="ap-breadcrumb-current">All Photos</span>
          </nav>
          <span className="ap-hero-count">
            <span>{filtered.length}</span> / {terraGalleryData.length} photos
          </span>
        </div>
        <h1 className="ap-hero-title">
          All <em>Photos</em>
        </h1>
        <p className="ap-hero-sub">
          Every dish, every moment, every detail in one place.
        </p>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="ap-filter-bar">
        <div className="ap-filter-cats">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`ap-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="ap-filter-right">
          <select
            className="ap-filter-select"
            value={activeSeason}
            onChange={e => setActiveSeason(e.target.value)}
          >
            {SEASONS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select
            className="ap-filter-select"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── RESULTS BAR ── */}
      <div className="ap-results-bar">
        <span className="ap-results-text">
          Showing <strong>{filtered.length}</strong> photos
          {activeCategory !== "All" && <> in <strong>{activeCategory}</strong></>}
          {activeSeason !== "All Seasons" && <> · <strong>{activeSeason}</strong></>}
        </span>
        <div className="ap-view-toggle">
          <button
            className={`ap-view-btn ${view === "grid" ? "active" : ""}`}
            onClick={() => setView("grid")}
            title="Grid view"
          >
            <GridIcon />
          </button>
          <button
            className={`ap-view-btn ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
            title="List view"
          >
            <ListIcon />
          </button>
        </div>
      </div>

      {/* ── PHOTO GRID / LIST ── */}
      <div className="ap-grid-wrap">
        {filtered.length === 0 ? (
          <div className="ap-empty">
            <div className="ap-empty-icon">🍽️</div>
            <h3 className="ap-empty-title">No photos found</h3>
            <p className="ap-empty-sub">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className={`ap-grid ap-grid--${view}`}>
            {filtered.map(item =>
              view === "grid"
                ? <GridCard key={item.id} item={item} />
                : <ListCard key={item.id} item={item} />
            )}
          </div>
        )}
      </div>

    </div>
  )
}

export default AllPhotos
