import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav' ;
import logo from '../images/logo1-sm2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar,faUserCircle, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


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
            
            <Link to="/market" className='nav-item'>
            
            <button className="nav-btn btn btn-outline-primary " >

            Market
            </button>
        </Link>            
        <Nav className="ml-auto nav-custom" >

            {/* no user logged in */}
            <Link to="/register" className='nav-item'>
              <button className="nav-btn btn btn-outline-primary ">Register</button>
            </Link>
            <Link to="/login" className='nav-item'>
            <button className="nav-btn btn btn-outline-primary " >Login</button>
            </Link>

            {/* user logged in */}
            <Link  to ='/fav'  className='nav-item'>
            <FontAwesomeIcon icon={faCar}  size="2x" style={{color:'#25A7F7'}}/>
            </Link>
            <Link to="/profile" className='nav-item'>
            <FontAwesomeIcon icon={faUserCircle}  size="2x" style={{color:'#25A7F7'}}/>
            </Link>
            <Link to="/" className='nav-item'>
            <button className="nav-btn btn btn-outline-primary " >Logout</button>
            </Link>
            

            </Nav>
           
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NaviBar;