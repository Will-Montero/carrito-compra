import React, { useEffect, useState, ReactNode } from "react";
import { ProductosContext } from "./ProductosContext";

// Define la interfaz para los productos
interface Producto {
  id: number; // Cambia el tipo según sea necesario
  title: string; // Agrega otros campos que necesites
  price: number;
  // Otros campos según la estructura de los productos de la API
}

// Define las props del proveedor
interface ProductosProviderProps {
  children: ReactNode; // Permite cualquier tipo de nodo React como hijo
}

export const ProductosProvider: React.FC<ProductosProviderProps> = ({ children }) => {
  const [productos, setProductos] = useState<Producto[]>([]); // Especificamos que es un arreglo de productos

  const fetchProductos = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data: Producto[] = await response.json(); // Especificamos que 'data' es un arreglo de productos
      setProductos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductosContext.Provider value={{ productos }}>
      {children}
    </ProductosContext.Provider>
  );
};