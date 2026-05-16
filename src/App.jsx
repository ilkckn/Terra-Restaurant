import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Landing/Home";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
