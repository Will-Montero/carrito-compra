import { useState } from "react";
import '../styles/cardProductos.css'

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
    handleAgregar()
  };

  const clickEliminar = () => {
    setAñadir(false);
    handleEliminar()
  };
  return (
    <>
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />

      <div className="tarjeta-contenido">
        <h3 className="imagen-titulo">{titulo}</h3>
        <p className="imagen-descripcion">{categoria}</p>
        <p className="imagen-precio">{precio}</p>
      </div>

      {añadir
      ?
      <button
      onClick={clickEliminar}
      className="btn btn-danger"
      type="button"
      > Eliminar del carrito</button>
      :
      <button
      onClick={clickAñadir}
      className="btn btn-primary"
      type="button"
      >Agregar a Carrito</button>}
    </div>
    </>
  )
};
