"use client";
import React, { useState } from 'react';

const Donacion = () => {
  const [monto, setMonto] = useState("");

  const handleMontoChange = (e) => {
    setMonto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí se procesaría la donación con el monto seleccionado
    console.log(`Monto a donar: ${monto}`);

    // Ejemplo de llamada a una API
    // fetch("/api/donaciones", {
    //   method: "POST",
    //   body: JSON.stringify({ monto }),
    // });

    // Restablecer el estado del monto
    setMonto("");
  };

  return (
    <section className=" py-8 px-4 md:px-8">
      <h2 className="text-2xl font-bold text-center mb-4">Apoya nuestro proyecto</h2>
      <p className="text-center mb-8">
        Tu donación nos ayudará a seguir adelante con nuestra misión de...
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <label
              htmlFor="monto"
              className="block text-sm font-medium text-gray-700"
            >
              Monto a donar
            </label>
            <input
              id="monto"
              type="number"
              min="1"
              value={monto}
              onChange={handleMontoChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap mt-4 md:mt-0">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              S/. 10
            </button>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              S/. 25
            </button>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Otro monto
            </button>
          </div>
        </div>
      </form>

      <p className="text-center mt-4">
        También puedes donar por PayPal o transferencia bancaria.
      </p>

      <div className="flex justify-center mt-4">
        <a href="#">
          <img
            src="/images/paypal-logo.png"
            alt="Logo de PayPal"
            className="w-20 h-auto"
          />
        </a>
        <a href="#">
          <img
            src="/images/banco-logo.png"
            alt="Logo del banco"
            className="w-20 h-auto ml-4"
          />
        </a>
      </div>
    </section>
  );
};

export default Donacion;
