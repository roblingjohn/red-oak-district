import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <h1>Red Oak District</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/program">The Program</Nav.Link>
              <Nav.Link href="/neighborhood">The Neighborhood</Nav.Link>
              <Nav.Link href="/future">The Future</Nav.Link>
              <Nav.Link href="/events">The Events</Nav.Link>
              <NavDropdown title="Follow Us">
                <NavDropdown.Item>Facebook</NavDropdown.Item>
                <NavDropdown.Item>Instagram</NavDropdown.Item>
                <NavDropdown.Item>Twitter</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
