import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { UserContext } from "../../context/UserContext";
import Boton from "../../ejemplos/Boton";

function NavBar() {
  const { user, logout } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Link className="NavLinks" to="/">
          Inicio
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="NavLinks" to="/store/procesadores">
              Procesadores
            </Link>
            <Link className="NavLinks" to="/store/rams">
              Memorias RAM
            </Link>
            <Link className="NavLinks" to="/store/graficas">
              Tarjetas Gráficas
            </Link>
          </Nav>
          <Nav className="user-section">
            

            {user.logged && (
              <div className="user-info">
                <p className="NavLinks user-email">{user.email}</p>
                <button className="NavLinks logout-button" onClick={logout}>
                  Cerrar sesión
                </button>
              </div>
            )}

<CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

