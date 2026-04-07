import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./state/globalProvider";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />

          <div
            style={{ backgroundColor: "#2d6a4f", color: "#ffffff" }}
            className="text-center py-5 mb-4"
          >
            <h1 className="display-5 fw-bold mb-2">🌿 Organika Store</h1>
            <p className="lead mb-0" style={{ color: "#b7e4c7" }}>
              Fresh, organic fruits and berries delivered to your door
            </p>
          </div>

          <div className="container mb-5 flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
