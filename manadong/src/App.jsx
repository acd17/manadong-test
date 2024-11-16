import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Outlets from "./pages/Outlets";
import AboutUs from "./pages/AboutUs";
import Eatery from "./pages/Eatery";
import News from "./pages/News";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div className="manadong">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/eatery" element={<Eatery />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
