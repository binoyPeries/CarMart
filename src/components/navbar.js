import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav' ;
import logo from '../images/logo1-sm.png'

const NaviBar = () => {
    return ( 
        <Navbar className='navbar-custom' expand="lg">
        <Navbar.Brand href="/">
    
      <img
        src={logo}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
           
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NaviBar;