import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Marca from "../assets/marca.jpeg";



export function Header() {
  return (
    <>
    <Navbar bg="info" expand="lg" variant='Dark'>
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src={Marca}
              width="50rem"
              height="50rem"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"proyectos"}>Projects</Nav.Link>
            <Nav.Link as={Link} to={"about"}>About Me</Nav.Link>
            <Nav.Link as={Link} to={"contact"}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}





 


