import React, { useState } from "react";
import HeroChocolates from "./HeroChocolates";
import FlavorCards from "./FlavorCards";
const Hero = () => {
  const [activeFlavores, setActiveFlavores] = useState("");
  return (
    <section className="choco-section inner-container">
      <HeroChocolates activeFlavores={activeFlavores} />
      <FlavorCards setActiveFlavores={setActiveFlavores} />
    </section>
  );
};

export default Hero;
