import "./Section3.css";
import { NavLink } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

function Section3() {
  return (
    <section className="section3-container">
      <aside className="special-selection">
        <p className="heading-top">tonight</p>
        <div className="heading-main">
          <h1>Our Special</h1>
          <h1>Selection</h1>
        </div>
        <p className="desc">
          Each plate, crafted from the season's freshest ingredients a
          masterpiece in its own right.
        </p>
        <NavLink to="/menu" className="discover-menu-link">
          <p>
            Discover Menu <MdArrowRightAlt className="arrow-right" />
          </p>
        </NavLink>
      </aside>
      <div className="menu">
        <div className="menu-item">
          <div className="content-left">
            <span>main course</span>
            <h2>Wagyu Filet Mignon</h2>
            <p>Truffle oil, caramelized onions, red wine sauce</p>
          </div>
          <div className="content-right">
            <span className="price">€65</span>
            <p>the chef's recommendation</p>
          </div>
        </div>

        <div className="menu-item">
          <div className="content-left">
            <span>starter</span>
            <h2>Foie Gras Terrine</h2>
            <p>Served with mango jam and brioche</p>
          </div>
          <div className="content-right">
            <span className="price">€34</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content-left">
            <span>seafood</span>
            <h2>Lobster Bisque</h2>
            <p>Served with fresh bread, whipped cream, and dill</p>
          </div>
          <div className="content-right">
            <span className="price">€42</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content-left">
            <span>Dessert</span>
            <h2>Valrhona Fondant</h2>
            <p>Hot chocolate, vanilla ice cream, gold leaf</p>
          </div>
          <div className="content-right">
            <span className="price">€18</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
