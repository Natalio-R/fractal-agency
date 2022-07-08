import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import logo from "../assets/fractal-black.svg";

const Menu = () => {
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="60"
              className="d-inline-block align-top"
              alt="Logotipo de Fractal Agency"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto fs-5 fw-bold">
              <Nav.Link href="#home" style={{ fontFamily: "DM Sans" }}>
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#features"
                className="ms-4"
                style={{ fontFamily: "DM Sans" }}
              >
                Servicios
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="ms-4"
                style={{ fontFamily: "DM Sans" }}
              >
                Acerca de
              </Nav.Link>
              <Nav.Link
                href="#pricing ps-4"
                className="ms-4"
                style={{ fontFamily: "DM Sans" }}
              >
                Precios
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="ms-4"
                style={{ fontFamily: "DM Sans" }}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
