import { ArrowUp, Instagram, Mail, MessageCircle } from "lucide-react";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo("home");
    }
    a;
  };

  return (
    <footer
      id="contact"
      className="max-h-2/3 flex flex-col justify-center items-center  text-foreground px-6"
    >
      <div className="max-w-4xl w-full flex flex-col gap-6 md:flex-row md:items-center justify-between">
        <a
          href="https://www.instagram.com/manishphotos_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <Instagram size={24} />
          <span>@manishphotos_</span>
        </a>

        <a
          href="mailto:manisharphotos@gmail.com"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <Mail size={24} />
          <span>manisharphotos@gmail.com</span>
        </a>

        <a
          href="https://wa.me/9779847068567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-400 transition"
        >
          <MessageCircle size={24} />
          <span>+977 9847068567</span>
        </a>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Manish Photos. All rights reserved.
      </div>

      {/* Scroll to top button */}
      <a
        href="#hero"
        onClick={scrollToTop}
        className="mt-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/80 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
