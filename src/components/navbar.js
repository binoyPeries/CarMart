import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav' ;
import logo from '../images/logo1-sm2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar,faUserCircle, car } from '@fortawesome/free-solid-svg-icons'


const NaviBar = () => {
    return ( 
        <Navbar className='navbar-custom' expand="lg">
        <Navbar.Brand href="/">
    
      <img
        src={logo}
        className="d-inline-block align-top"
        alt="company-logo"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            
            <Nav.Link href="/" className='nav-item'>
            
            <button className="nav-btn btn btn-outline-primary " >

            Market
            </button>
            </Nav.Link>
            <Nav className="ml-auto nav-custom" >

            {/* no user logged in */}
            <Nav.Link href="/register" className='nav-item'>
              <button className="nav-btn btn btn-outline-primary ">Register</button>
            </Nav.Link>
            <Nav.Link href="/" className='nav-item'>
            <button className="nav-btn btn btn-outline-primary " >Login</button>
            </Nav.Link>

            {/* user logged in */}
            {/* <Nav.Link  className='nav-item'>
            <FontAwesomeIcon icon={faCar}  size="2x" style={{color:'#25A7F7'}}/>
            </Nav.Link>
            <Nav.Link href="/" className='nav-item'>
            <FontAwesomeIcon icon={faUserCircle}  size="2x" style={{color:'#25A7F7'}}/>
            </Nav.Link>
            <Nav.Link href="/" className='nav-item'>
            <button className="nav-btn btn btn-outline-primary " >Logout</button>
            </Nav.Link> */}
            

            </Nav>
           
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NaviBar;