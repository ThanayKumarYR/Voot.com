import React from "react";
import { lazyLoad } from "./lazyload.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route exact strict path = "/" element={<Home/>}/>
            <Route exact strict path = "/Premium" element={<Premium/>}/>
            <Route exact strict path = "/Shows" element={<Shows/>}/>
            <Route exact strict path = "/Movies" element={<Movies/>}/>
            <Route exact strict path = "/Kids" element={<Kids/>}/>
            <Route exact strict path = "/Sports" element={<Sports/>}/>
            <Route exact strict path = "/Channels" element={<Channels/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
