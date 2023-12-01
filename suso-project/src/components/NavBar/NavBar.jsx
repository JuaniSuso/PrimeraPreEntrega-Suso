import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar() {
  return (
    <>

<Navbar collapseOnSelect expand="lg" className="bg-custom-color">
      <Container>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Procesadores</Nav.Link>
            <Nav.Link href="#pricing">Gráficas</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

      
    </>
  );
}

export default NavBar;