import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


function Header() {
  return (
    <>
    <header className="p-5 text-2xl ">
    <Navbar  expand="lg" bg="dark" variant="dark"  fixed="top"  >
    <Container>
    <Navbar.Brand href="/" >Book A Movie</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/movielist">Movies</Nav.Link>
      <Nav.Link href="/cinemas">Cinemas</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </header>
      
    </>
  );
}

export default Header;