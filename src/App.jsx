import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Landing/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
