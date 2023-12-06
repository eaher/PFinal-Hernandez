import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css"; 
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={`${styles.customNavbar}`}>
          <Link to={"/"}>
            <Navbar.Brand><img className={styles.logo} src="/src/img/Logo.png" alt="MrUnicorn" /></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav>
              <Link to={"/"} className="nav-link">
                Inicio
              </Link>
              <Link to={"/category/motores"} className="nav-link">
                Motores
              </Link>
              <Link to={"/category/embarcacion"} className="nav-link">
                Embarcaciones
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div className={`${styles.cartContainer}`}>
            <CartWidget />
          </div>
    </Navbar>
  );
};
