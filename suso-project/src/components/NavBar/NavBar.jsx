// NavBar.jsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
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
              Tienda
            </Link>
            <Link className="NavLinks" to="/store/rams">
              Memorias RAM
            </Link>
            <Link className="NavLinks" to="/store/graficas">
              Tarjetas Gráficas
            </Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
