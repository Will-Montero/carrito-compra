import '../styles/navbar.css'
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
import { Badge } from "@mui/material";
import  ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';


export const NavBar = () => {

  const { stateProductos } = useContext(CarritoContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     
      <div className="container-fluid">
        <NavLink to='/' className="navbar-brand">
          Productos
        </NavLink>
       <NavLink to='/carrito'>
       <Badge badgeContent={stateProductos.length} color="secondary">
            <ShoppingCartIcon  color="action" />
       </Badge>
       </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/carrito' className="nav-link" aria-current="page">
                Carrito
              </NavLink>
            </li>
          </ul>
         
        </div>
      </div>
      
    </nav>
  );
};
