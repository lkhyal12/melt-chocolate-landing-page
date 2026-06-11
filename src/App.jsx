import React from "react";
import SmoothScroll from "./SmoothScroll";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Taste from "./sections/Taste";
import Quality from "./sections/Quality";
import Paralex from "./sections/Paralex";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Taste />
      <Quality />
      <Paralex />
      <Footer />
    </SmoothScroll>
  );
};

export default App;
