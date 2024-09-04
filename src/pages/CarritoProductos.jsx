import { useContext } from "react";
import { CarritoContext } from '../context/CarritoContext';

export const CarritoProductos = () => {
  const { stateProductos, AumentarCompra, DisminuirCompra, EliminarCompra } = useContext(CarritoContext);

  const valorTotal = () => {
    return stateProductos.reduce((total, item) => total + item.cantidad * item.price, 0).toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {stateProductos.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => DisminuirCompra(item.id)}
                >
                  -
                </button>
                <button>{item.cantidad}</button>
                <button
                  className="btn btn-primary"
                  onClick={() => AumentarCompra(item.id)}
                >
                  +
                </button>
              </td>
              <td>
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
      <div className="d-grid gap-2">
        <button
          onClick={handleImpresion}
          disabled={stateProductos.length < 1}
          className="btn btn-primary"
        >
          Comprar
        </button>
      </div>
    </>
  );
};
