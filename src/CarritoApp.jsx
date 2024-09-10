import { NavBar } from "./components/NavBar"
import { CarritoProvider } from "./context/CarritoProvider"
import { ProductosProvider } from './context/ProductosProvider'
import { Routes, Route, Navigate } from "react-router-dom"
import { ProductosPage } from "./pages/ProductosPage"
import { CarritoProductos } from "./pages/CarritoProductos"
import { Footer } from "./components/Footer"

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<ProductosPage/>}></Route>
      <Route path="/carrito" element={<CarritoProductos/>}></Route>
      <Route path="/*" element={<Navigate to='/'/>}></Route>
      </Routes>
      <Footer/>
      </CarritoProvider>
    </ProductosProvider>
  )
}
