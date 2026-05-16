import "./Menu.css";
import menu_data from "./Menu-Data.js";
import { useState, useRef } from "react";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryInfoRef = useRef(null);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);

    /* Mobilde (768px altı) kategori seçince
       otomatik olarak category-info'ya scroll yapar */
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        categoryInfoRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <section className="menu-container">
      {/* ── HEADER ── */}
      <header>
        <div className="top-bar">
          <span></span>
          <p>our menu</p>
        </div>
        <div className="main-header">
          <h1>
            Crafted with <span>Passion</span>
          </h1>
        </div>
        <p className="desc">
          Every dish tells a story of seasonal ingredients, timeless technique,
          and the quiet joy of a meal well made.
        </p>
      </header>

      {/* ── TONIGHT'S HIGHLIGHTS ── */}
      <div className="tonights-highlights">
        <header>
          <h2>Tonight's Highlights</h2>
        </header>
        <div className="highlight-list">
          <div className="highlight-item">
            <p className="highlight-category">chef's choice</p>
            <h1>wagyu filet mignon</h1>
            <p>Truffle oil, caramelized onions, red wine reduction</p>
            <div className="price-tof">
              <p className="price">$68</p>
              <p className="tof">main course</p>
            </div>
          </div>
          <div className="highlight-item">
            <p className="highlight-category">Seasonal</p>
            <h1>Lobster Bisque</h1>
            <p>Fresh bread, whipped cream, dill garnish</p>
            <div className="price-tof">
              <p className="price">$42</p>
              <p className="tof">seafood</p>
            </div>
          </div>
          <div className="highlight-item">
            <p className="highlight-category">New</p>
            <h1>Valrhona Fondant</h1>
            <p>Warm chocolate, vanilla ice cream, gold leaf</p>
            <div className="price-tof">
              <p className="price">$38</p>
              <p className="tof">dessert</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MENU CATEGORIES ── */}
      <div className="menu-categories">
        {/* SIDEBAR */}
        <aside>
          <h2>Categories</h2>

          <div className="aside-content">
            {menu_data.map((category) => (
              <div
                key={category.id}
                className={`menu-category ${
                  selectedCategory?.id === category.id ? "active" : ""
                }`}
                onClick={() => handleSelectedCategory(category)}
              >
                <div className="icon-name-type">
                  <span className="category-icon">{category.icon}</span>
                  <div className="icon-name">
                    <p className="category-name">{category.name}</p>
                    <p className="category-type">{category.type}</p>
                  </div>
                </div>
                <p className="number-of-category">{category.items.length}</p>
              </div>
            ))}
          </div>

          {/* Good to Know */}
          <div className="good-to-know">
            <header className="gtk-header">
              <h2>Good to Know</h2>
            </header>
            <div className="veg-spicy-cchoice">
              <div className="veg">
                <span className="veg-icon">🌿</span>
                <p>Vegetarian</p>
              </div>
              <div className="spicy">
                <span className="spicy-icon">🌶️</span>
                <p>Spicy</p>
              </div>
              <div className="cchoice">
                <span className="cchoice-icon">⭐</span>
                <p>Chef's Choice</p>
              </div>
            </div>
          </div>
        </aside>

        {/* CATEGORY INFO */}
        <div className="category-info" ref={categoryInfoRef}>
          {selectedCategory ? (
            <>
              <header className="selected-category-header">
                <h2>
                  {selectedCategory.name.slice(0, 4)}
                  <span>{selectedCategory.name.slice(4)}</span>
                </h2>
                <span>{selectedCategory.items.length} dishes</span>
              </header>

              <div className="category-dishes">
                {selectedCategory.items.map((dish) => (
                  <div key={dish.id} className="dish-item">
                    <p>{dish.name}</p>
                    <h3>{dish.title}</h3>
                    <p>{dish.description}</p>
                    <div className="price-type-chefChoice">
                      <p className="tof">{dish.type}</p>
                      <div className="price-choice">
                        <p className="price">{dish.price}</p>
                        <p
                          className={
                            dish.chef_recommendation ? "chefChoice" : "empty"
                          }
                        >
                          {dish.chef_recommendation && "Chef's Choice"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <p>Select a category to explore the menu</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Menu;
