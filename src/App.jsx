import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home       from './components/Home/home';   // <-- picks up index.jsx
import WhatWeDo   from './components/WhatWeDo/WhatWoDo';
import Footer       from './components/Home/Footer';

// …other page imports…

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/"           element={<Home />}     />
        <Route path="/what-we-do" element={<WhatWeDo />} />
      </Routes>

      <Footer />  {/* <-- this will show on every page */}
    </>
  );
}
