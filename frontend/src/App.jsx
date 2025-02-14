import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import Carousel from "./modules/Carousel";
import Scalar from "./modules/Scalar";
import Mission from "./modules/Mission";
import MessageFromPresident from "./modules/MessageFromPresident";
import Particle from "./modules/Particle";
import About from "./modules/About";
import Funding from "./modules/Funding";
import Programs from "./modules/Programs";
import Resources from "./modules/Resources";
import Contact from "./modules/Contact";
import Notfound from "./modules/Notfound";
import Associations from "./modules/Associations";
import Build from "./modules/Build"


import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Carousel />
              <Mission/>
              <Build/>
              <Scalar />
              <Associations/>
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/funding"
          element={
            <>
              <Navbar />
              <Funding />
              <Footer />
            </>
          }
        />

        <Route
          path="/programs"
          element={
            <>
              <Navbar />
              <Programs/>
              <Footer />
            </>
          }
        />

        <Route
          path="/resources"
          element={
            <>
              <Navbar />
              <Resources />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
