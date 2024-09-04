import { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'


const estadoInicial = []

const productosReducer = async (state = estadoInicial, action = {}) => {
    switch (action.value) {
        case '[COMPRA]: Agregar compra':
            return [...state, action.payload]
        case '[COMPRA]: Aumentar compra':
            return state.map( item => 
            {
                const cant = item.cantidad + 1;
                if(item.id === action.payload) return {...item, cantidad: cant}
                return item
            } 
            )
        case '[COMPRA]: Disminuir compra':
            return state.map( item => 
                {
                    const cant = item.cantidad - 1;
                    if(item.id === action.payloadn && item.cantidad > 1) return {...item, cantidad: cant}
                    return item
                } 
                )
        case '[COMPRA]: Eliminar compra':
            return state.filter(compra => compra.id !== action.payload ) 

    
        default:
            return state
    }
}

export const CarritoProvider = ({ children }) => {

    const [stateProductos, dispatch] = useReducer(productosReducer, estadoInicial)

    const AgregarCompra = (compra) => {

        compra.cantidad = 1
        const action = {
            type: '[COMPRA]: Agregar compra',
            payload: compra
        }
        dispatch(action)
    }
    const AumentarCompra = (id) => {
        const action = {
            type: '[COMPRA]: Aumentar compra',
            payload: id
        }
        dispatch(action)
    }
    const DisminuirCompra = (id) => {
        const action = {
            type: '[COMPRA]: Disminuir compra',
            payload: id
        }
        dispatch(action)
    }
    const EliminarCompra = (id) => {
        const action = {
            type: '[COMPRA]: Eliminar compra',
            payload: id
        }
        dispatch(action)
    }


  return (
    <CarritoContext.Provider value={{stateProductos, AgregarCompra, AumentarCompra, DisminuirCompra, EliminarCompra}}>
        { children }
    </CarritoContext.Provider>
  )
}
