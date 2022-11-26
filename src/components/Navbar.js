import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar
      className="bg-[#0073aa] font-Koulen text-xl"
      variant="dark"
      expand="lg"
    >
      <Container fluid className="flex justify-between  w-full  ">
        <Navbar.Brand href="/" className="mx-7">
          Hooked on Hebrew
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className="mx-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" href="/table">
              Hebrew Table
            </Nav.Link>
            <Nav.Link className="mx-3" href="/resources">
              Resources
            </Nav.Link>
            <Nav.Link className="mx-3" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
