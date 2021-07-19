import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import Table from 'react-bootstrap/Table'

import fronImg from '../images/front.jpg'; 
import backImg from '../images/back.jpg'; 
import intImg from '../images/interior.jpg'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faEnvelope  }  from '@fortawesome/fontawesome-free-regular';



const Vehicle = () => {
    const images = [fronImg,backImg,intImg];

    return ( 

        <Container  style={{marginTop:"40px"}}>
            <Row>
                <Col lg={6}> 
                <Carousel interval={2000}>
                {images.map((img,index) =>(
                    <Carousel.Item>
                    
                    <img
                        className="w-100"
                        style={{height:"350px"}}
                        src={img}
                        alt="First slide"
                        key={index}
                        />
                </Carousel.Item>

                ))
                }
                </Carousel>


                </Col>
                
                <Col lg={6}>
                    <Table striped bordered>
                    <tbody className="text-center" style={{backgroundColor:"#092a46", color:"white", fontSize:"25px"}}>
                        <tr>
                        <td colSpan="2" > LKR 25,000,000 </td>
                        </tr>
                    
                    </tbody>
                    </Table>

                    <Table striped bordered hover  className="basic-detail">
                   
                    <tbody className="text-center">
                        <tr>
                        <td colSpan="2" key="1"> Make  : Toyota </td>
                        </tr>

                        <tr>
                        <td colSpan="2"  key="2"> Model  : Civic </td>
                        </tr>

                        <tr>
                        <td colSpan="2"  key="3" > Year  : 2010  </td>
                        </tr>

                        <tr>
                        <td colSpan="2"  key="4" > Condition  : Used </td>
                        </tr>

                        <tr>
                        <td colSpan="2"  key="5" > Mileage :  30,000 km </td>
                        </tr>
                    
                    </tbody>
                    </Table>


                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                <Table striped bordered hover className="basic-detail">
                
                    <tbody >

                        <tr>
                        <td colSpan="2" rowSpan="3" > Special Note 
                         <br/>
                         <span style={{fontSize:"16px"}}>
                         Special Note – All Services Done With Stafford Motors – Ja Ela ( All Records Available )
                            Mileage -50600 Km X Turbo Fully Loaded 
                            1 St Owner (Home Used ) 
                                                    
                         </span>
                         
                         </td>
                        
                        </tr>

                    </tbody>
                </Table>

                

                </Col>

                <Col lg={6}>
                <Table striped bordered hover className="basic-detail">
                
                    <tbody className="text-center">

                        <tr>
                        <td colSpan="2"  key="1" > Transmission  : Manual </td>
                        </tr>

                        <tr>
                        <td colSpan="2"  key="2" > Fuel Type  : Petrol </td>
                        </tr>

                        <tr>
                        <td colSpan="2"   key="3"> Engine Capacity  : 1500 cc  </td>
                        </tr>

                    
                    </tbody>
                </Table>

                <Card className="profile-card">
                    <Card.Title className="text-center" >Owner Profile</Card.Title>
                    <Card.Body  >

                    <Row>
                        <Col sm={6}>
                            <div className="profile-body-div">
                            <FontAwesomeIcon icon={faUserCircle}  className="profile-icon" />
                            <span  > Saman Perera</span>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <div className="profile-body-div">
                            <FontAwesomeIcon icon={faMapMarkerAlt}   className="profile-icon" />
                            <span  > Colombo, Sri Lanka</span>
                            </div>

                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6} >
                            <div className="profile-body-div">
                            <FontAwesomeIcon icon={faEnvelope}   className="profile-icon" />
                            <span  > saman@gmail.com</span>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="profile-body-div">
                            <FontAwesomeIcon icon={faPhone}   className="profile-icon" />
                            <span  > 077 123 4567</span>
                            </div>

                        </Col>
                    </Row>
                    
                    </Card.Body>
                </Card>

                </Col>

                
            </Row>

        </Container>
     );
}
 
export default Vehicle;