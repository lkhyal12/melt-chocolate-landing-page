import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Quality = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      window.addEventListener("load", () => {
        cardsRef.current.forEach((card, idx) => {
          gsap.set(card, {
            y: "180%",
            rotate: idx % 2 === 0 ? -10 : 10,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(cardsRef.current, {
          y: 0,
          rotate: 0,
          stagger: 1,
          duration: 1,
          ease: "power1.inOut",
        });
      });
    },
    { scope: sectionRef },
  );
  return (
    <section ref={sectionRef} className="inner-container pt-30 pb-40 ">
      <div className="grid grid-cols-12 gap-20 ">
        {/* left content */}
        <div className="col-span-7 h-full flex flex-col justify-between">
          <h2 className="max-w-175 leading-20">
            What goes into every bar of{" "}
            <span className="text-orange">MELT</span>
          </h2>
          <div className="max-w-115 leading-6 font-medium ">
            Every bar is a result of careful sourcing, precise timing, and
            countless taste tests — all to make sure each bite feels
            intentional.
          </div>
        </div>

        {/* right cards */}
        <div className="col-span-5 relative h-130">
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="card bg-blue text-white rounded-3xl max-w-115 w-full min-h-112 p-10 flex flex-col justify-between ml-auto"
          >
            <div>
              <div className="text-[7.5vw] font-semibold leading-40">200+</div>
              <div className="text-3xl font-semibold">Taste Iterations</div>
            </div>
            <div>Refined until the flavour feels just right.</div>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="card bg-yellow  text-white rounded-3xl max-w-115 w-full min-h-112 p-10 flex flex-col justify-between ml-auto absolute top-16 right-0"
          >
            <div>
              <div className="text-[7.5vw] font-semibold leading-40">30+</div>
              <div className="text-3xl font-semibold">Test Batches</div>
            </div>
            <div>Small batches. Big attention to detail.</div>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="card bg-green text-white rounded-3xl max-w-115 w-full min-h-112 flex flex-col justify-between absolute top-32 right-0 p-10"
          >
            <div>
              <div className="text-[7.5vw] font-semibold leading-40">100%</div>
              <div className="text-3xl font-semibold">Natural Ingredients</div>
            </div>
            <div>No shortcuts. No compromises.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
