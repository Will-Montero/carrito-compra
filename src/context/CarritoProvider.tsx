import React, { useReducer, ReactNode } from 'react';
import { CarritoContext } from './CarritoContext';

// Define la interfaz para los productos en el carrito
interface Producto {
  id: number; // Cambia el tipo según sea necesario
  cantidad: number;
  // Agrega otros campos que necesites
}

// Define la interfaz para el estado del carrito
interface CarritoState {
  stateProductos: Producto[];
}

// Define la interfaz para las acciones del reducer
interface Action {
  type: string;
  payload?: any; // Cambia 'any' por el tipo específico que necesites
}

// Estado inicial
const estadoInicial: Producto[] = [];

// Reducer para manejar el estado del carrito
const productosReducer = (state: Producto[] = estadoInicial, action: Action): Producto[] => {
  switch (action.type) {
    case '[COMPRA]: Agregar compra':
      return [...state, action.payload];
    case '[COMPRA]: Aumentar compra':
      return state.map(item => {
        const cant = item.cantidad + 1;
        if (item.id === action.payload) return { ...item, cantidad: cant };
        return item;
      });
    case '[COMPRA]: Disminuir compra':
      return state.map(item => {
        const cant = item.cantidad - 1;
        if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant };
        return item;
      });
    case '[COMPRA]: Eliminar compra':
      return state.filter(compra => compra.id !== action.payload);
    default:
      return state;
  }
};

// Define las props para el proveedor
interface CarritoProviderProps {
  children: ReactNode; // Permite cualquier tipo de nodo React como hijo
}

export const CarritoProvider: React.FC<CarritoProviderProps> = ({ children }) => {
  const [stateProductos, dispatch] = useReducer(productosReducer, estadoInicial);

  const AgregarCompra = (compra: Producto) => {
    compra.cantidad = 1;
    const action: Action = {
      type: '[COMPRA]: Agregar compra',
      payload: compra,
    };
    dispatch(action);
  };

  const AumentarCompra = (id: number) => {
    const action: Action = {
      type: '[COMPRA]: Aumentar compra',
      payload: id,
    };
    dispatch(action);
  };

  const DisminuirCompra = (id: number) => {
    const action: Action = {
      type: '[COMPRA]: Disminuir compra',
      payload: id,
    };
    dispatch(action);
  };

  const EliminarCompra = (id: number) => {
    const action: Action = {
      type: '[COMPRA]: Eliminar compra',
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider value={{ stateProductos, AgregarCompra, AumentarCompra, DisminuirCompra, EliminarCompra }}>
      {children}
    </CarritoContext.Provider>
  );
};