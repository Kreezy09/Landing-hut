import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/hut.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="" className="me-lg-5">
          <img className="logo" src={logo} alt="logo-01" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="">Properties</Nav.Link>
            <Nav.Link href="" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="">Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
          >
            Sign In
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
