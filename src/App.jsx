import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <AboutUs />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
