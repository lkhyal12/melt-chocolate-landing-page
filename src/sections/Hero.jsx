import React, { useRef, useState } from "react";
import HeroChocolates from "./HeroChocolates";
import FlavorCards from "./FlavorCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [activeFlavores, setActiveFlavores] = useState("");
  const heroRef = useRef();
  useGSAP(
    () => {
      const pairs = [
        {
          choco: document.querySelector(".caremel-choco"),
          card: document.querySelector(".caramel-card"),
        },
        {
          choco: document.querySelector(".cocoa-choco"),
          card: document.querySelector(".cocoa-card"),
        },
        {
          choco: document.querySelector(".orange-choco"),
          card: document.querySelector(".orange-card"),
        },
        {
          choco: document.querySelector(".almond-choco"),
          card: document.querySelector(".almond-card"),
        },
      ];
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".choco-section",
          start: "top top",
          end: "70% center",
          scrub: true,
          // markers: true,
          // pin: true,
          invalidateOnRefresh: true,
        },
      });

      pairs.forEach(({ choco, card }) => {
        tl.to(
          choco,
          {
            x: () => {
              const c = choco.getBoundingClientRect();
              const t = card.getBoundingClientRect();
              const calc = t.left + t.width / 2 - (c.left + c.width / 2);
              return calc;
            },
            y: () => {
              const c = choco.getBoundingClientRect();
              const t = card.getBoundingClientRect();
              const calc =
                t.top + t.height / 2 - (c.top + (c.height / 2) * 1.2);
              return calc;
            },
            scale: 0.6,
            ease: "none",
          },
          0,
        );
      });
    },
    { scope: heroRef.current },
  );
  return (
    <section ref={heroRef} className="choco-section inner-container">
      <HeroChocolates activeFlavor={activeFlavores} />
      <FlavorCards setActiveFlavore={setActiveFlavores} />
    </section>
  );
};

export default Hero;
