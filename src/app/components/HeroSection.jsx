"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './HeroSection.css';
import { Link } from 'react-scroll';

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = './CV - Montaño García, Xavier David.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return  (
      <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="rainbow-text">Hola, soy{" "}</span>
              <br></br>
              <TypeAnimation
                sequence={[
                  'David',
                  1000,
                  'Web Dev.',
                  1000,
                  'Designer UX/UI',
                  1000,
                  'FrontEnd Dev.',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Desarrollador web enfocado en FrontEnd usando HTML, CSS, JavaScript, React.
            </p>
            <div>
                {/*<button id="about" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-500 to-cyan-500 hover:bg-slate-200 text-white">Contáctame</button>*/}
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-green-500 to-cyan-500 hover:bg-slate-800 text-white mt-3" onClick={handleDownloadCV}>
                 <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Descargar CV</span>
                </button>
            </div>
        </motion.div>
    </div>
    </section>
  )
}

export default HeroSection