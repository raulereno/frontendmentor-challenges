import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarBoots() {
  return (
    <Navbar bsPrefix={"navbar"} expand="lg">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Difficulty" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/newbie">Newbie</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/junior">Junior</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="/intermediate">
              Intermediate
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="/advanced">Advanced</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="/guru">Guru</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarBoots;
