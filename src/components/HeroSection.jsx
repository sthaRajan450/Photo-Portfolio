import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const headingRef = useRef([]);
  const subHeadingRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
    });

    // Animate words of main heading
    tl.from(headingRef.current, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
    });

    // Animate subheading
    tl.from(
      subHeadingRef.current,
      {
        opacity: 0,
        y: 30,
        stagger: 0.2,
      },
      "-=0.3"
    ); // start before heading ends
  }, []);

  const headingWords = ["capturing", "life", "through", "every", "frame"];
  const subLabels = ["newsman", "traveler", "multimedia"];

  return (
    <section 
    id="hero"
      className="relative  min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: 'url("/images/hero.JPG")' }}
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-6 uppercase">
          <h1 className="text-4xl md:text-6xl font-bold  flex flex-wrap justify-center gap-2">
            {headingWords.map((word, i) => (
              <span
                key={i}
                ref={(el) => (headingRef.current[i] = el)}
                className="inline-block text-background"
              >
                {word}
              </span>
            ))}
          </h1>
          <h2 className="text-2xl md:text-3xl flex flex-wrap justify-center gap-2">
            {subLabels.map((label, i) => (
              <span
                key={i}
                ref={(el) => (subHeadingRef.current[i] = el)}
                className="inline-block text-foreground/80"
              >
                | {label} |
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
