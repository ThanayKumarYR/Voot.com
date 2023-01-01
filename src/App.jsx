import React, { Suspense } from "react";
import { lazyLoad } from "./lazyload.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import globle from "./assets/css/globle.module.css";
const Home = lazyLoad("./pages/Home.jsx");
const Premium = lazyLoad("./pages/Premium.jsx");
const Shows = lazyLoad("./pages/Shows.jsx");
const Movies = lazyLoad("./pages/Movies.jsx");
const Kids = lazyLoad("./pages/Kids.jsx");
const Sports = lazyLoad("./pages/Sports.jsx");
const Channels = lazyLoad("./pages/Channels.jsx");
const Navbar = lazyLoad("./components/Navbar.jsx");
const Footer = lazyLoad("./components/Footer.jsx");

function App() {
  

  return (
    <div className={globle.App}>
      <BrowserRouter>
        <header className={globle.header}>
          <Navbar />
        </header>
        <main>
          <Suspense fallback={<div className={globle.spinner}></div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Premium" element={<Premium />} />
              <Route exact path="/Shows" element={<Shows />} />
              <Route exact path="/Movies" element={<Movies />} />
              <Route exact path="/Kids" element={<Kids />} />
              <Route exact path="/Sports" element={<Sports />} />
              <Route exact path="/Channels" element={<Channels />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
