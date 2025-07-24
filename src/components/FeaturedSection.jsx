import React from "react";

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

const FeaturedSection = () => {
  const renderLogos = (logos) =>
    logos.map(({ src, alt, link }, idx) =>
      link ? (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-110 duration-300"
        >
          <img
            src={src}
            alt={alt}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </a>
      ) : (
        <img
          key={idx}
          src={src}
          alt={alt}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain transition hover:scale-110 duration-300"
        />
      )
    );

  return (
    <section className="w-full h-screen  text-foreground flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Previously Worked Section */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-5xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
          Previously Worked
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6">
          {renderLogos(workedLogos)}
        </div>
        <button className="px-4 py-2 text-sm sm:text-base md:text-lg bg-foreground text-background rounded-full shadow-md hover:scale-105 transition duration-300">
          See More
        </button>
      </div>

      {/* Featured In Section */}
      <div className="text-center max-w-5xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
          Work Featured In
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6">
          {renderLogos(featuredLogos)}
        </div>
        <button className="px-4 py-2 text-sm sm:text-base md:text-lg bg-foreground text-background rounded-full shadow-md hover:scale-105 transition duration-300">
          See More
        </button>
      </div>
    </section>
  );
};

export default FeaturedSection;
