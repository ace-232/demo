import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Navbar    from "./Navbar";
import Home      from "./components/Home/home";
import AboutUs   from "./components/AboutUs/AboutUs";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Network from "./components/Network/Network";
import Lead from "./components/Lead/Lead";
import Competition from "./components/Competition/Competition";
import Footer    from "./components/Home/Footer";
import Career  from "./components/Career/Career";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />}       />
        <Route path="/about-us"   element={<AboutUs />}    />
        <Route path="/case-study" element={<CaseStudy />}  />
        <Route path="/services/expert-network-access" element={<Network />} />
        <Route path="/services/lead-generation" element={<Lead />} />
        <Route path="/services/competition-benchmarking" element={<Competition />} />
        <Route path="/career"     element={<Career />}     />
        <Route path="/contact"    element={<Contact />}    />
      </Routes>
      <Footer />
    </>
  );
}