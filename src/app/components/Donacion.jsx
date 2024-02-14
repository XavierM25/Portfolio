import React from 'react';

const Donacion = () => {

  const handleClick = (monto) => {
    // Aquí se agrega la función para procesar la donación
    alert(`Donando $${monto}`);
  };

  return (
    <section className="donaciones-container">
      <h2>¡Apoya nuestro proyecto!</h2>
      <p>Tu donación nos ayudará a seguir adelante y mejorar nuestro trabajo.</p>
      <div className="botones-donacion">
        <button className="boton amarillo" onClick={() => handleClick(5)}>
          $5
        </button>
        <button className="boton celeste" onClick={() => handleClick(10)}>
          $10
        </button>
        <button className="boton rojo" onClick={() => handleClick(20)}>
          $20
        </button>
      </div>
      <p>¿Quieres donar otro monto?</p>
      <input type="number" placeholder="Ingresa el monto" />
      <button className="boton verde">Donar</button>
    </section>
  );
};

export default Donacion;
