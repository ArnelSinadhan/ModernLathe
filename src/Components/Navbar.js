import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarCollapse, NavbarToggle } from "react-bootstrap";

const Navbars = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="img/Logo.jpg"
              alt="Modern lathe"
              width={100}
              height={40}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About Us</Nav.Link>
              <Nav.Link href="listOfEquipments">List of Equipments</Nav.Link>
              <Nav.Link href="services">Our Services</Nav.Link>
              <Nav.Link href="projects">Projects</Nav.Link>
              <Nav.Link href="contactUS">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navbars;
