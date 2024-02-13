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
              <NavDropdown title="The Neighborhood">
                <NavDropdown.Item href="/history">History</NavDropdown.Item>
                <NavDropdown.Item href="/arts">Arts & Culture</NavDropdown.Item>
                <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                <NavDropdown.Item href="/businesses">
                  Businesses
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/cosf">CoSF</Nav.Link>
              <NavDropdown title="About">
                <NavDropdown.Item href="/program">The Program</NavDropdown.Item>
                <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Socials">
                <NavDropdown.Item
                  href="https://www.facebook.com/RedOakDistrict/"
                  target="_blank"
                >
                  Facebook
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.instagram.com/redoakdistrict/"
                  target="_blank"
                >
                  Instagram
                </NavDropdown.Item>
                {/* <NavDropdown.Item>Twitter</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
