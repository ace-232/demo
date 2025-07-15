import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Navbar    from "./Navbar";
import Home      from "./components/Home/home";
import WhatWeDo  from "./components/WhatWeDo/WhatWeDo";
import AboutUs   from "./components/AboutUs/AboutUs";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Footer    from "./components/Home/Footer";

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />}       />
        <Route path="/what-we-do" element={<WhatWeDo />}   />
        <Route path="/about-us"   element={<AboutUs />}    />
        <Route path="/case-study" element={<CaseStudy />}  />
      </Routes>
      <Footer />
    </>
  );
}