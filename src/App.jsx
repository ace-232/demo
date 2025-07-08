import React from "react";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
        <Cover />
      <AboutUs />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;