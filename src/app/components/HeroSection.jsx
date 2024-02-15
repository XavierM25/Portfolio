"use client";
import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const linkRef = useRef(null);

  const handleDownloadCV = () => {
    const link = linkRef.current;
    if (link) {
      link.click();
    }
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#121212] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-black">
            <span className="rainbow-text">Hola, soy </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "David",
                1000,
                "Web Dev.",
                1000,
                "Designer UX/UI",
                1000,
                "FrontEnd Dev.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#3F3F3F] text-base sm:text-lg mb-6 lg:text-xl">
            Desarrollador web enfocado en FrontEnd usando HTML, CSS, JavaScript,
            React.
          </p>
          <div>
            {/*<button id="about" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-500 to-cyan-500 hover:bg-slate-200 text-white">Contáctame</button>*/}
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-[#ab5923] hover:bg-[#ab5923] text-[#ab5923] mt-3"
              onClick={handleDownloadCV}
            >
              <span className="block bg-[#fdf9f1] hover:bg-[#f4ddb4] rounded-full px-5 py-2">
                Descargar CV
              </span>
            </button>
            <a
              ref={linkRef}
              href="./CV - Montaño García, Xavier David.pdf"
              download="CV.pdf"
              style={{ display: "none" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
