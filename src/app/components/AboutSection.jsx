"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad César Vallejo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CCNA: Introduction to Networks</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/image.png"
          width={500}
          height={500}
          alt="Logo de la página"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">Sobre mí</h2>
          <p className="text-base md:text-lg">
            Me llamo David, tengo 19 años y soy de Lima, Perú. Actualmente soy
            estudiante de Ingeniería de Sistemas. Me apasiona enfocarme en la
            parte de rendimiento para brindar la mejora en la experiencia del
            usuario.
          </p>

          <p className="text-base md:text-lg">
            Además, he participado en el programa Renacyt elaborado por el
            Consejo Nacional de Ciencia, Tecnología e Innovación Tecnológica
            (CONCYTEC) del estado peruano creando la aplicación móvil llamada
            FoodV que consiste en un E-Commerce.
          </p>
          <br />
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Dominio{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Educación<nav></nav>
              {""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}
              Logros{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
