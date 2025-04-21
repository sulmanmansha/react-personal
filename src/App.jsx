import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import About from "./components/About"; // Landing page
import Home from "./components/Home/index"; // Home page
import Contact from "./components/Contact/index"; // Capital 'C'
import Service  from "./components/Service/index"
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<About />} /> {/* Landing page */}
        <Route path="/home" element={<Home />} /> {/* Home page */}
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} /> {/* Contact page */}

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
