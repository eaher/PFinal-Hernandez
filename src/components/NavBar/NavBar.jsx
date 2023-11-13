import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import { auto } from "@popperjs/core";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar expand="lg">

          <Link to={"/"}>
            <Navbar.Brand href="#home">Mr Unicorn</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav>
              <Link to={"/"}>
                <Nav.Link href="#inicio">Inicio</Nav.Link>
              </Link>
              <Link to={"/category/motores"}>
                <Nav.Link href="#motores">Motores</Nav.Link>
              </Link>
              <Link to={"/category/embarcacion"}>
                <Nav.Link href="#motores">Embarcacion</Nav.Link>
              </Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className={`${styles.cartContainer}`}>
            <CartWidget />
          </div>
        </Navbar>
      </div>
    </>
  );
};
