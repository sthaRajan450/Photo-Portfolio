import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, User, Video } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphsRef = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power2.out", duration: 1 },
      });

      tl.from(headingRef.current, { opacity: 0, y: 30 })
        .from(subheadingRef.current, { opacity: 0, y: 20 }, "-=0.5")
        .from(
          paragraphsRef.current,
          {
            opacity: 0,
            y: 20,
            stagger: 0.2,
          },
          "-=0.5"
        )
        .from(
          cardRefs.current,
          {
            opacity: 0,
            y: 30,
            stagger: 0.3,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/images/about.JPG"
        alt="About"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto max-w-5xl px-4 text-center">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h3 ref={subheadingRef} className="text-2xl font-semibold">
              Passionate Photographer
            </h3>
            <p ref={(el) => (paragraphsRef.current[0] = el)}>
              I’m a multimedia journalist and documentary filmmaker from Nepal,
              passionate about telling real stories through images and film. My
              work has been featured in both national and international media,
              but more than recognition, what drives me is the chance to connect
              people to Nepal in all its complexity, beauty, and contradiction.
            </p>
            <p ref={(el) => (paragraphsRef.current[1] = el)}>
              Whether I’m filming a festival, following a political movement, or
              documenting a day in someone’s life, I approach every story with
              empathy and honesty. Through my lens, I aim to amplify voices that
              often go unheard, and to preserve moments that might otherwise be
              forgotten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary  text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div
              className="gradient-border p-6 card-hover"
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Camera className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Photographer</h4>
                  <p className="text-muted-foreground">
                    I specialize in capturing powerful moments that tell stories
                    — from the streets of Kathmandu to remote mountain villages.
                    My lens is drawn to emotion, energy, and authenticity.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="gradient-border p-6 card-hover"
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Video className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Videographer</h4>
                  <p className="text-muted-foreground">
                    With a strong foundation in documentary filmmaking, I craft
                    compelling visual narratives that raise awareness, spark
                    emotion, and inspire change.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="gradient-border p-6 card-hover"
              ref={(el) => (cardRefs.current[2] = el)}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <User className="text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Storyteller</h4>
                  <p className="text-muted-foreground">
                    My goal is to spotlight unheard voices and underrepresented
                    communities, blending empathy with truth to tell stories
                    that matter and resonate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
