import { useState } from "react";
import "../styles/cardProductos.css";

export const CardProductos = ({
  titulo,
  imagen,
  precio,
  categoria,
  handleAgregar,
  handleEliminar,
}) => {
  const [añadir, setAñadir] = useState(false);

  const clickAñadir = () => {
    setAñadir(true);
    handleAgregar();
  };

  const clickEliminar = () => {
    setAñadir(false);
    handleEliminar();
  };

  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };
  return (
   
      <div className="card-tarjeta">
        <img src={imagen} alt={titulo} className="card-tarjeta-imagen" />

        <div className="card-tarjeta-contenido">
          <h6 className="card-imagen-titulo">{limitarPalabras(titulo, 3)}</h6>
          <p className="card-imagen-categoria">{categoria}</p>
          <p className="imagen-precio">${precio}</p>
        </div>

        {añadir ? (
          <button
            onClick={clickEliminar}
            className="boton-quitar"
            type="button"
          >
            {" "}
            Quitar del carrito
          </button>
        ) : (
          <button onClick={clickAñadir} className="boton-agregar" type="button">
            Agregar a Carrito
          </button>
        )}
      </div>

  );
};
