import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MainNav = () => {
  return (
    <Navbar expand="sm" bg={"dark"} data-bs-theme={"dark"} sticky={"top"}>
      <Container fluid>
        <Navbar.Brand href="#home">Emma's Budget App</Navbar.Brand>
        <Navbar.Toggle aria-controls={"responsive-navbar-nav"} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"#home"}>Home</Nav.Link>
            <Nav.Link href={"#budget"}>Budget</Nav.Link>
            <Nav.Link href={"#expenses"}>Expenses</Nav.Link>
          </Nav>
          <Nav className={"ms-auto"}>
            <Nav.Link href={"#login"}>Login</Nav.Link>
            <Nav.Link href={"#register"}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
