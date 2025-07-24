import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const worksData = [
  {
    title: "Bhagwati Jatra",
    description:
      "Experience the vibrant colors and energy of this historic festival.",
    image: "/works/bhagwatijatra.jpg",
  },

  {
    title: "Daily Life 1",
    description: "Ordinary moments that tell extraordinary stories.",
    image: "/works/dailylife1.jpg",
  },
  {
    title: "Daily Life 2",
    description: "The rhythm of daily life, beautifully captured.",
    image: "/works/dailylife2.jpg",
  },
  {
    title: "Lakeside View",
    description: "A peaceful evening by the lakeside, wrapped in serenity.",
    image: "/works/lakeside.JPG",
  },
  {
    title: "The Monk",
    description: "Solitude and discipline captured in a single frame.",
    image: "/works/monk.jpg",
  },
  {
    title: "People's Life",
    description: "Raw expressions from daily streets of Nepal.",
    image: "/works/peoples.JPG",
  },
  {
    title: "Protest Scene",
    description: "The energy and voice of the people.",
    image: "/works/protest1.jpg",
  },
  {
    title: "Himalayan Scenery",
    description: "Majestic views of the untouched landscapes.",
    image: "/works/scenery.JPG",
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {worksData.map((work, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 text-muted-foreground bg-black/50   p-6 rounded-xl max-w-md text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {work.title}
              </h3>
              <p className="mb-4 text-sm text-white">{work.description}</p>
              <button className="cosmic-button">Explore More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorksSection;
