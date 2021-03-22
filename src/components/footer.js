import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo1-sm2.png'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'




const Footer = () => {
    return (  
        <div className="footer">
            <Container>
            <Row className="justify-content-md-start">
                <Col xs lg="6">
                <img src={logo} alt="company-logo" style={{width:"250px"}}/>
                    
                </Col>
                <Col xs lg="3">
                    <Row>
                    <p>Contact Us</p>
                    </Row>
                    <Row>
                    <p>+94 777 123 456</p>
                    </Row>
                    <Row>
                    <p>+94 777 456 456</p>
                    </Row>
                    
                
                </Col>

                <Col xs lg="3">
                    <Row>
                    <p>Social Media</p>
                    </Row>
                    <Row>
                        <span className="social-icon"> <FontAwesomeIcon icon={faInstagram}  size="lg" /> </span>
                        <span  className="social-icon"> <FontAwesomeIcon icon={faFacebook}  size="lg" /> </span>
                        <span  className="social-icon"> <FontAwesomeIcon icon={faTwitter}  size="lg" /> </span>
                    </Row>

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