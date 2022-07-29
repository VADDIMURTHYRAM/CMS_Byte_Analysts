import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
function Layout() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history('/');
  }
  function newcontact()
  {
    history('/NewContact');
  }
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CMS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
            {localStorage.getItem('user-info') ?
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item onClick={newcontact}>NewContact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :null}
          </Container>
        </Navbar>
        <Outlet/>
      </>
    );
};

export default Layout;