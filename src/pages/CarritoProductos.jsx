import { useContext } from "react"
import { CarritoContext } from '../context/CarritoContext'
export const CarritoProductos = () => {

  const {stateProductos, AumentarCompra, DisminuirCompra, EliminarCompra} = useContext(CarritoContext)

  const valorTotal = () => {
    return stateProductos.reduce((total, item) => total + item.cantidad * item.price, 0).toFixed(2)
  }
  const handleImpresion = () => {
    print()
  }
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {stateProductos.map(item => (
      <tr key={item.id}>
      <th >{item.title}</th>
      <td>{item.price}</td>
      <td>
        <button
        className="btn btn-danger"
        onClick={() => DisminuirCompra(item.id)}
        >
          -
        </button>
        <button>
        {item.cantidad}
        </button>
        <button
        className="btn btn-primary"
        onClick={() => AumentarCompra(item.id)}
        >

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
    <th><b>TOTAL:</b> </th>
    <td></td>
    <td>${valorTotal()}</td>
    <td></td>
  </tbody>
</table>
<div className="d-grid gap-2">
    <button onClick={handleImpresion}
    disabled={stateProductos<1}
     className="btn btn-primary">
        Comprar
    </button>
</div>
    </>
  )
}
