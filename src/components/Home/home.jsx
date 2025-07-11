import React from 'react';
import Navbar     from './Navbar';
import Cover       from './Cover';
import AboutUs     from './AboutUs';
import Services    from './Services';
import Testimonial from './Testimonial';

export default function Home() {
  return (
    <>
      <Navbar />
      <Cover />
      <AboutUs />
      <Services />
      <Testimonial />
    </>
  );
}
