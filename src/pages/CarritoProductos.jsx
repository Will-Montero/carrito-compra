import { useContext } from "react";
import { CarritoContext } from '../context/CarritoContext';
import '../styles/carritoPage.css'

export const CarritoProductos = () => {
  const { stateProductos, AumentarCompra, DisminuirCompra, EliminarCompra } = useContext(CarritoContext);

  const valorTotal = () => {
    return stateProductos.reduce((total, item) => total + item.cantidad * item.price, 0).toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };
  const limitarPalabras = (texto, maxPalabras) => {
    const palabras = texto.split(" ");
    if (palabras.length > maxPalabras) {
      return palabras.slice(0, maxPalabras).join(" ") + "...";
    }
    return texto;
  };

  return (
    <div className="carrito-container">
      <table className="carrito-table">
        <thead>
          <tr>
            <th scope="carrito-table-header">Producto</th>
            <th scope="carrito-table-header">Precio</th>
            <th scope="carrito-table-header">Cantidad</th>
            <th scope="carrito-table-header">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {stateProductos.map((item) => (
            <tr key={item.id}>
              <td className="carrito-item">{limitarPalabras(item.title, 3)}</td>
              <td className="carrito-item">${item.price}</td>
              <td className="carrito-item">
                <button
                  className="boton-disminuir"
                  onClick={() => DisminuirCompra(item.id)}
                >
                  -
                </button>
                <button className="boton-cantidad">{item.cantidad}</button>
                <button
                  className="boton-aumentar"
                  onClick={() => AumentarCompra(item.id)}
                >
                  +
                </button>
              </td>
              <td className="carrito-item">
                <button
                  className="btn btn-danger"
                  onClick={() => EliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {/* El total debe ir fuera de las filas de productos */}
          <tr>
            <td colSpan="2"><b>TOTAL:</b></td>
            <td colSpan="2">${valorTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          onClick={handleImpresion}
          disabled={stateProductos.length < 1}
          className="boton-comprar"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
