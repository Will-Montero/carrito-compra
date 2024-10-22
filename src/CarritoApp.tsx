import { NavBar } from "./components/NavBar";
import { CarritoProvider } from "./context/CarritoProvider";
import { ProductosProvider } from './context/ProductosProvider';
import { Routes, Route, Navigate } from "react-router-dom";
import { ProductosPage } from "./pages/ProductosPage";
import { CarritoProductos } from "./pages/CarritoProductos";
import { Footer } from "./components/Footer";

// Definimos que CarritoApp es un componente funcional de React
export const CarritoApp: React.FC = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductosPage />} />
          <Route path="/carrito" element={<CarritoProductos />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </CarritoProvider>
    </ProductosProvider>
  );
};
