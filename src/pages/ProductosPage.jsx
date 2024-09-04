import {CardProductos } from '../components/CardProductos'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'
import { useContext } from 'react'
import '../styles/cardProductos.css'
export const ProductosPage = () => {

 const { productos } = useContext(ProductosContext)
 const { AgregarCompra, EliminarCompra } = useContext(CarritoContext)

 const handleAgregar = (compra) => {
  AgregarCompra(compra)
 }
 const handleEliminar = (id) => {
  EliminarCompra(id)
 }



  return (
   <>
   <h2>Productos</h2>
  <div className='card-container'>
  {productos.map(producto => {
    return (
       <CardProductos
      key={producto.id}
      titulo={producto.title}
      precio={producto.price}
      catregoria={producto.category}
      imagen={producto.image}
      handleAgregar={() => handleAgregar(producto)}
      handleEliminar={() => handleEliminar(producto.id)}
      ></CardProductos>
   
    )
   })}
  </div>
   </>
  )
}
