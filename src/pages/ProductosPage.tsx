import React, { useContext } from 'react';
import { CardProductos } from '../components/CardProductos';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';
import '../styles/cardProductos.css';

// Define la interfaz para los productos
interface Producto {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export const ProductosPage: React.FC = () => {
  const { productos } = useContext(ProductosContext);
  const { AgregarCompra, EliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra: Producto) => {
    AgregarCompra(compra);
  };

  const handleEliminar = (id: number) => {
    EliminarCompra(id);
  };

  return (
    <div className='productos-container'>
      <br />
      <h2>Productos</h2>
      <br />
      <div className='card-container'>
        {productos.map((producto: Producto) => {
          return (
            <CardProductos
              key={producto.id}
              titulo={producto.title}
              precio={producto.price}
              categoria={producto.category} // Corrige "catregoria" a "categoria"
              imagen={producto.image}
              handleAgregar={() => handleAgregar(producto)}
              handleEliminar={() => handleEliminar(producto.id)}
            />
          );
        })}
      </div>
    </div>
  );
};