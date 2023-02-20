import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const LoginCheck = () => {
  if(true) {
    return <Nav.Link href="/Login">Login</Nav.Link>    
  } else {
    return <Nav.Link href="/Logout">Logout</Nav.Link>      
  }
}

function HeaderNavbar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">MyCloud9x</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Drive">Drive</Nav.Link>
          </Nav>
          <Nav className='justify-content-end' activeKey="/Login">
            {/* <Nav.Link href="/Login">Login</Nav.Link> */}
            {LoginCheck()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;


