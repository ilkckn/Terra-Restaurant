import "./OurChefs.css";
import { useRef, useState } from "react";
import chef_data from "./OurChefsData";
import Spotlight from "../../components/OurChefs-Spotlight/Spotlight";
import Brigade from "../../components/OurChefs-Brigade/Brigade";
import KitchenPhilosophy from "../../components/OurChefs-KitchenPhilosophy/KitchenPhilosophy";
import JoinOurKitchen from "../../components/OurChefs-JoingOurKitchen/JoinOurKitchen";

function OurChefs() {
  const trackRef = useRef(null);

  /* Kaç kart görünüyor — 3 */
  const CARDS_PER_PAGE = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(chef_data.length / CARDS_PER_PAGE);

  /* İleri — 3 kart kaydır */
  const scrollNext = () => {
    if (currentIndex >= totalPages - 1) return;
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  /* Geri — 3 kart kaydır */
  const scrollPrev = () => {
    if (currentIndex <= 0) return;
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.scrollWidth / totalPages;
    trackRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  /* Mouse sürükleme — desktop */
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft =
      scrollLeft.current - (x - startX.current) * 1.5;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="our-chefs-container">
      <div className="hero">
        <div className="content-left">
          <div className="top-bar">
            {/* <span></span> */}
            <p>the craft behind every plate</p>
          </div>
          <div className="main-header">
            <h1>Meet the</h1>
            <h1>
              <span>Visionaries</span>
            </h1>
            <h1>of TERRA</h1>
          </div>
          <p className="desc">
            Behind every dish is a story, a technique, and a person who gave
            years of their life to the pursuit of perfection. These are the
            people who make TERRA what it is.
          </p>

          <div className="scroll-controls">
            <button
              className={`scroll-btn ${currentIndex === 0 ? "disabled" : ""}`}
              onClick={scrollPrev}
              disabled={currentIndex === 0}
            >
              ←
            </button>
            <div className="page-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentIndex ? "active" : ""}`}
                  onClick={() => {
                    setCurrentIndex(i);
                    scrollToIndex(i);
                  }}
                />
              ))}
            </div>
            <button
              className={`scroll-btn ${currentIndex === totalPages - 1 ? "disabled" : ""}`}
              onClick={scrollNext}
              disabled={currentIndex === totalPages - 1}
            >
              →
            </button>
          </div>
        </div>

        <div className="content-right">
          <div
            className="cards-track"
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {chef_data.map((chef, index) => (
              <div className="chef-card" key={chef.id}>
                <div className="card-img-wrapper">
                  <span className="card-num">0{index + 1}</span>
                  <img src={chef.image} alt={chef.name} />
                  <span className="card-role-badge">{chef.role}</span>
                </div>
                <div className="card-body">
                  <h2>{chef.name}</h2>
                  <p>{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-overlay" />
        </div>
      </div>

      <div className="chef-spotlight">
        <Spotlight />
      </div>
      <div className="the-brigade">
        <Brigade />
      </div>
      <div className="kitchen-philosophy">
        <KitchenPhilosophy />
      </div>
      <div className="join-our-kitchen">
        <JoinOurKitchen />
      </div>
    </section>
  );
}

export default OurChefs;
