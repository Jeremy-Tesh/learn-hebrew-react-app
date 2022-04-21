import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className="bg-[#0073aa]" variant="dark">
        <Container className="flex justify-between  w-full  ">
          <Navbar.Brand href="/" className="mx-7">
            Hooked on Hebrew
          </Navbar.Brand>
          <Nav className="me-auto mx-6 ">
            <Nav.Link className="mx-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" href="/table">
              Hebrew Table
            </Nav.Link>
            <Nav.Link className="mx-3" href="/about">
              About us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
