import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
function Layout() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CMS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
            <ul class="nav navbar-nav navbar-right">
            <Nav.Link as={Link} to="/NewContact">NewContact</Nav.Link>
            </ul>
          </Container>
        </Navbar>
        <Outlet/>
      </>
    );
};

export default Layout;