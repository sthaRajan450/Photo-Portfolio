import React from "react";
import { motion } from "framer-motion";

const workedLogos = [
  {
    src: "/worked/kathmandupress.png",
    alt: "Kathmandu Press",
    link: "https://kathmandupress.com/author/734",
  },
  {
    src: "/worked/nepallive.png",
    alt: "Nepal Live",
    link: "http://nepallive.com",
  },
  {
    src: "/worked/neapllivetoday.webp",
    alt: "Nepal Live Today",
    link: "https://www.nepallivetoday.com/author/manish-aryal/",
  },
  {
    src: "/worked/npl.png",
    alt: "NPL Logo",
    link: "https://www.nepalphotolibrary.com/",
  },
];

const featuredLogos = [
  {
    src: "/featured/ratopati.png",
    alt: "Ratopati",
    link: "https://www.ratopati.com/search?query=%e0%a4%ae%e0%a4%a8%e0%a4%bf%e0%a4%b7+%e0%a4%85%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%b2",
  },
  {
    src: "/featured/setopati.svg",
    alt: "Setopati",
    link: "https://www.setopati.com/byline/%e0%a4%ae%e0%a4%a8%e0%a4%bf%e0%a4%b7%20%e0%a4%85%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%b2",
  },
  { src: "/featured/ronb.jpg", alt: "RONB" },
];

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturedSection = () => {
  const renderLogos = (logos) =>
    logos.map(({ src, alt, link }, idx) => {
      const Image = (
        <motion.img
          src={src}
          alt={alt}
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
          custom={idx}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        />
      );

      return link ? (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-110 duration-300"
        >
          {Image}
        </a>
      ) : (
        <div key={idx} className="transition hover:scale-110 duration-300">
          {Image}
        </div>
      );
    });

  return (
    <section
      id="featured"
      className="w-full min-h-screen text-foreground flex flex-col items-center justify-center p-4"
    >
      {/* Previously Worked Section */}
      <div className="text-center mb-16 max-w-5xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Previously Worked
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {renderLogos(workedLogos)}
        </div>
        <button className="px-4 py-2 text-base bg-foreground text-background rounded-full shadow-md hover:scale-105 transition duration-300">
          See More
        </button>
      </div>

      {/* Featured In Section */}
      <div className="text-center max-w-5xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Work Featured In
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {renderLogos(featuredLogos)}
        </div>
        <button className="px-4 py-2 text-base bg-foreground text-background rounded-full shadow-md hover:scale-105 transition duration-300">
          See More
        </button>
      </div>
    </section>
  );
};

export default FeaturedSection;
