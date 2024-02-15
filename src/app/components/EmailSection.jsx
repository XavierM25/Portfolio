"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [messageError, setMessageError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const messageField = form.current["message"];
    const subjectField = form.current["user_name"];

    if (!messageField.value.trim()) {
      messageField.style.border = "1px solid red";
      setMessageError("Por favor, rellene correctamente el formulario.");
      return;
    } else {
      messageField.style.border = "1px solid #33353F";
    }

    if (!subjectField.value.trim()) {
      subjectField.style.border = "1px solid red";
      setMessageError("Por favor, rellene correctamente el formulario.");
      return;
    } else {
      subjectField.style.border = "1px solid #33353F";
    }

    emailjs
      .sendForm(
        "service_redsp42",
        "template_mtq7mys",
        form.current,
        "Gaieg8JVOAZ8LU7F1"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          form.current.reset();
          setShowNotification(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-200 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-20">
        <h5 className="text-3xl font-bold text-[#121212] my-2">
          Vamos a conectarnos
        </h5>
        <p className="text-black mb-4 max-w-md text-xl">
          {" "}
          ¿Estás interesado en contactarte conmigo? Puedes enviarme un mensaje
          rellenando el formulario o, contactarme mediante mis redes sociales.
          Saludos.
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/XavierM25">
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/in/davidmontaño25">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://www.instagram.com/davix_studios/">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </a>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="user_email"
              className="text-[#121212] block mb-2 text-sm font-medium"
            >
              Tu correo
            </label>
            <input
              name="user_email"
              type="email"
              id="user_email"
              required
              className="bg-[#faf0da] border border-[#121212] placeholder:-[#121212] text-[#121212] text-sm rounded-lg block w-full p-2.5"
              placeholder="email@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="text-[#121212] block text-sm mb-2 font-medium"
            >
              Asunto
            </label>
            <input
              name="user_name"
              type="text"
              id="user_name"
              required
              className="bg-[#faf0da] border border-[#121212] placeholder:-[#121212] text-[#121212] text-sm rounded-lg block w-full p-2.5"
              placeholder="¡Hola!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-[#121212] block mb-2 text-sm font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#faf0da] border border-[#121212] placeholder:-[#121212] text-[#121212] text-sm rounded-lg block w-full p-2.5"
              placeholder="Vamos a hablar sobre..."
            />
            {messageError && (
              <p className="text-red-500 text-sm mt-2">{messageError}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-200 hover:bg-green-300 text-[#d372dc] font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar mensaje
          </button>
        </form>

        {showNotification && (
          <p className="text-green-500 text-sm mt-2">
            Su correo se ha enviado correctamente!
          </p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
