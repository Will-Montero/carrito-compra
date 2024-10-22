import React, { StrictMode } from 'react'; // Importamos React y StrictMode
import { createRoot } from 'react-dom/client'; // Importamos createRoot desde react-dom
import { BrowserRouter } from 'react-router-dom'; // Importamos BrowserRouter para manejar rutas
import { CarritoApp } from './CarritoApp'; // Importamos el componente CarritoApp

// Verificamos que el elemento con id 'root' exista y lo usamos para renderizar la aplicación
const rootElement = document.getElementById('root') as HTMLElement; 

// Creamos la raíz de la aplicación y renderizamos el árbol de componentes
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <CarritoApp />
    </BrowserRouter>
  </StrictMode>,
);