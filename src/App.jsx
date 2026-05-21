import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Landing/Home";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import OurChefs from "./pages/OurChefs/OurChefs";
import Gallery from "./pages/Gallery/Gallery";
import AllPhotos from "./components/Gallery-All-Photos/AllPhotos";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-chefs" element={<OurChefs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/all-photos" element={<AllPhotos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
