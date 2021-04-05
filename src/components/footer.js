import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faVoicemail ,faInbox} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter ,  } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo1-sm2.png'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'




const Footer = () => {
    return (  
        <div className="footer">
            <Container>
            <Row className="justify-content-md-start">
                <Col  sm ={12} md={12} lg={6} style={{paddingRight:"80px", paddingBottom:"20px"}}>
                <h5>About Us</h5>
                <p style={{textAlign:"justify",paddingTop:"10px"}}> <b>CarMart</b> is a one stop e-commerce platform for your favourite vehicles.
                You can Buy, Sell, Trade  any type of vehicle, across the country, anytime, anywhere and absolutely free of Charge.
                Posting an advertisement on <b>CarMart</b> is so convenient and takes only few minutes to get your vehicle advertised for sale, online.</p>
                    
                </Col>
                <Col  sm={6} md={6} lg={3} style={{paddingRight:"80px", paddingBottom:"20px"}}>
                    <h5>Contact Us</h5>   
                    <div style={{paddingBottom:"5px",paddingTop:"10px"}}>
                    <FontAwesomeIcon icon={faVoicemail}  size="sm" />
                    <span> +94 777 123 456</span>
                    </div>
                    <div style={{paddingBottom:"5px"}} >
                    <FontAwesomeIcon icon={faVoicemail}  size="sm" />
                    <span>  +94 777 256 456</span>
                    </div>
                    <div style={{paddingBottom:"5px"}}>
                    <FontAwesomeIcon icon={faInbox}  size="sm" />
                    <span>  carmart@gmail.com</span>
                    </div>
                                  
                </Col>

                <Col sm={6} md={6} lg={3} style={{ paddingBottom:"20px"}} >
                    <h5 style={{paddingBottom:"10px"}}>Social Media</h5>
                    <span className="social-icon"> <FontAwesomeIcon icon={faInstagram}  size="lg" /> </span>
                    <span  className="social-icon"> <FontAwesomeIcon icon={faFacebook}  size="lg" /> </span>
                    <span  className="social-icon"> <FontAwesomeIcon icon={faTwitter}  size="lg" /> </span>

                </Col>

            </Row>
            </Container>
            <div className="d-flex justify-content-center " style={{marginTop:"15px"}}>
            <p> <FontAwesomeIcon icon={faCopyright}  size="1x" /> 2021 Copyright BinoyPeries</p>
            </div>
        </div>
    );
}
 
export default Footer;