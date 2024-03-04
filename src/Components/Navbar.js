import { useState } from "react";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  NavbarBrand,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [expand, updateExpanded] = useState(false);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" expanded={expand}>
        <Container>
          <NavbarBrand as={Link} to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/Logo.jpg"}
              alt="Modern lathe"
              width={100}
              height={40}
            />
          </NavbarBrand>
          <NavbarToggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-center">
              <NavLink as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </NavLink>

              <NavLink
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About Us
              </NavLink>

              <NavLink
                as={Link}
                to="/listOfEquipments"
                onClick={() => updateExpanded(false)}
              >
                List of Equipments
              </NavLink>

              <NavLink
                as={Link}
                to="/services"
                onClick={() => updateExpanded(false)}
              >
                Our Services
              </NavLink>

              <NavLink
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </NavLink>

              <NavLink
                as={Link}
                to="/contactUS"
                onClick={() => updateExpanded(false)}
              >
                Contact Us
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navbars;
