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
  return (
   
      <div className="card-tarjeta">
        <img src={imagen} alt={titulo} className="card-tarjeta-imagen" />

        <div className="card-tarjeta-contenido">
          <h6 className="card-imagen-titulo">{titulo}</h6>
          <p className="card-imagen-categoria">{categoria}</p>
          <p className="imagen-precio">{precio}</p>
        </div>

        {añadir ? (
          <button
            onClick={clickEliminar}
            className="boton-quitar"
            type="button"
          >
            {" "}
            Eliminar del carrito
          </button>
        ) : (
          <button onClick={clickAñadir} className="boton-agregar" type="button">
            Agregar a Carrito
          </button>
        )}
      </div>

  );
};
