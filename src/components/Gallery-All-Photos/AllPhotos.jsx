import { useState, useMemo } from "react";
import "./AllPhotos.css";
import terraGalleryData from "../../pages/Gallery/GalleryData";

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
];

const SEASONS = [
  "All Seasons",
  "Spring",
  "Summer",
  "Autumn",
  "Winter",
  "All Year",
];

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "chef", label: "By Chef" },
  { value: "season", label: "By Season" },
  { value: "year-desc", label: "Newest First" },
  { value: "year-asc", label: "Oldest First" },
];

function getBadgeClass(badgeStyle) {
  const map = {
    terra: "ap-card-badge--terra",
    dark: "ap-card-badge--dark",
    gold: "ap-card-badge--gold",
    sage: "ap-card-badge--sage",
  };
  return map[badgeStyle] || "ap-card-badge--dark";
}

function GridIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="0.5" />
      <rect x="9" y="1" width="6" height="6" rx="0.5" />
      <rect x="1" y="9" width="6" height="6" rx="0.5" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="2" width="14" height="2.5" rx="0.5" />
      <rect x="1" y="6.8" width="14" height="2.5" rx="0.5" />
      <rect x="1" y="11.5" width="14" height="2.5" rx="0.5" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="3" y1="5" x2="17" y2="5" />
      <line x1="6" y1="10" x2="14" y2="10" />
      <line x1="9" y1="15" x2="11" y2="15" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
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
        <span className="ap-card-chef">
          {item.chef} · {item.season}
        </span>
      </div>
    </article>
  );
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
  );
}

// ── FILTER DRAWER ──
function FilterDrawer({
  isOpen,
  onClose,
  activeCategory,
  setActiveCategory,
  activeSeason,
  setActiveSeason,
  sortBy,
  setSortBy,
  onReset,
  activeCount,
}) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`ap-drawer-overlay ${isOpen ? "ap-drawer-overlay--open" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`ap-drawer ${isOpen ? "ap-drawer--open" : ""}`}>
        {/* Drawer header */}
        <div className="ap-drawer-header">
          <div className="ap-drawer-header-left">
            <span className="ap-drawer-label">Filters</span>
            {activeCount > 0 && (
              <span className="ap-drawer-active-count">{activeCount}</span>
            )}
          </div>
          <button className="ap-drawer-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Drawer body */}
        <div className="ap-drawer-body">
          {/* Kategori */}
          <div className="ap-drawer-section">
            <span className="ap-drawer-section-title">Category</span>
            <div className="ap-drawer-options">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`ap-drawer-option ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  {activeCategory === cat && (
                    <span className="ap-drawer-option-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sezon */}
          <div className="ap-drawer-section">
            <span className="ap-drawer-section-title">Season</span>
            <div className="ap-drawer-options ap-drawer-options--row">
              {SEASONS.map((s) => (
                <button
                  key={s}
                  className={`ap-drawer-pill ${activeSeason === s ? "active" : ""}`}
                  onClick={() => setActiveSeason(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Sıralama */}
          <div className="ap-drawer-section">
            <span className="ap-drawer-section-title">Sort By</span>
            <div className="ap-drawer-options">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  className={`ap-drawer-option ${sortBy === opt.value ? "active" : ""}`}
                  onClick={() => setSortBy(opt.value)}
                >
                  {opt.label}
                  {sortBy === opt.value && (
                    <span className="ap-drawer-option-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer footer */}
        <div className="ap-drawer-footer">
          <button className="ap-drawer-reset" onClick={onReset}>
            Reset Filters
          </button>
          <button className="ap-drawer-apply" onClick={onClose}>
            Apply
          </button>
        </div>
      </aside>
    </>
  );
}

function AllPhotos() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSeason, setActiveSeason] = useState("All Seasons");
  const [sortBy, setSortBy] = useState("default");
  const [view, setView] = useState("grid");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeFilterCount = [
    activeCategory !== "All",
    activeSeason !== "All Seasons",
    sortBy !== "default",
  ].filter(Boolean).length;

  const handleReset = () => {
    setActiveCategory("All");
    setActiveSeason("All Seasons");
    setSortBy("default");
  };

  const filtered = useMemo(() => {
    let result = [...terraGalleryData];

    if (activeCategory !== "All") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (activeSeason !== "All Seasons") {
      result = result.filter((item) => item.season === activeSeason);
    }

    switch (sortBy) {
      case "chef":
        result.sort((a, b) => a.chef.localeCompare(b.chef));
        break;
      case "season": {
        const seasonOrder = {
          Spring: 1,
          Summer: 2,
          Autumn: 3,
          Winter: 4,
          "All Year": 5,
        };
        result.sort(
          (a, b) => (seasonOrder[a.season] || 6) - (seasonOrder[b.season] || 6),
        );
        break;
      }
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        result.sort((a, b) => a.year - b.year);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeSeason, sortBy]);

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

      {/* ── TOP BAR ── */}
      <div className="ap-top-bar">
        {/* Sol: Filter butonu */}
        <button
          className={`ap-filter-trigger ${activeFilterCount > 0 ? "ap-filter-trigger--active" : ""}`}
          onClick={() => setDrawerOpen(true)}
        >
          <span className="ap-filter-trigger-icon">
            <FilterIcon />
          </span>
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="ap-filter-trigger-badge">{activeFilterCount}</span>
          )}
        </button>

        {/* Aktif filtreler — küçük etiketler */}
        {activeFilterCount > 0 && (
          <div className="ap-active-tags">
            {activeCategory !== "All" && (
              <span className="ap-active-tag">
                {activeCategory}
                <button onClick={() => setActiveCategory("All")}>×</button>
              </span>
            )}
            {activeSeason !== "All Seasons" && (
              <span className="ap-active-tag">
                {activeSeason}
                <button onClick={() => setActiveSeason("All Seasons")}>
                  ×
                </button>
              </span>
            )}
            {sortBy !== "default" && (
              <span className="ap-active-tag">
                {SORT_OPTIONS.find((o) => o.value === sortBy)?.label}
                <button onClick={() => setSortBy("default")}>×</button>
              </span>
            )}
            <button className="ap-clear-all" onClick={handleReset}>
              Clear all
            </button>
          </div>
        )}

        {/* Sağ: results + view toggle */}
        <div className="ap-top-bar-right">
          <span className="ap-results-text">
            <strong>{filtered.length}</strong> photos
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
      </div>

      {/* ── FILTER DRAWER ── */}
      <FilterDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeSeason={activeSeason}
        setActiveSeason={setActiveSeason}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReset={handleReset}
        activeCount={activeFilterCount}
      />

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
            {filtered.map((item) =>
              view === "grid" ? (
                <GridCard key={item.id} item={item} />
              ) : (
                <ListCard key={item.id} item={item} />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllPhotos;
