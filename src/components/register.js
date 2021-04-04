import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cities } from '../constants';






const Register = () => {
    return ( 
        <Container className="register-box">
        <Card className="register-card ">
                <Card.Header  className="register-card-title text-center">CREATE AN ACCOUNT</Card.Header>
            <Card.Body>
            <Form>
                <Row>
                    <Col lg={6} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">First Name*</Form.Label>
                            <Form.Control type="text" placeholder=""  />
                        </Form.Group>

                    </Col>
                
                    <Col lg={6} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Last Name*</Form.Label>
                            <Form.Control type="text" placeholder=""  />
                        </Form.Group>

                    </Col>

                </Row>
                <Row>
                    <Col lg={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Email*</Form.Label>
                            <Form.Control type="email" placeholder=""  />
                        </Form.Group>

                    </Col>
                    <Col lg={6} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Contact No*</Form.Label>
                            <Form.Control type="number" placeholder=""  />
                        </Form.Group>

                    </Col>
                
                </Row>
                <Row>
                    <Col lg={6}>
                    <Form.Group controlId="formGridState">
                        <Form.Label className="form-text">City</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option style={{color:"#1a6aae",fontWeight:"bold"}}>Select City</option>
                            {Cities.map((type)=> {
                                return(<option value={type} style={{color:"#1a6aae"}}> {type} </option>)
                            }
                            )}
                    </Form.Control>
                    </Form.Group>
                    </Col>

                    <Col lg={6} style={{paddingTop:"40px"}}>
                        
                        <div className="" style={{color:"#25A7F7", fontSize:"15px"}}>
                        (city will be used as your location when posting your Ads )
                        </div>  

                    </Col>
                
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="form-text">Password*</Form.Label>
                            <Form.Control type="password" />
                         </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formBasicPassword" >
                            <Form.Label className="form-text" >Confirm Password*</Form.Label>
                            <Form.Control type="password"  />
                         </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                    <Button variant="primary" type="submit" className="register-btn">
                        Register
                    </Button>

                    </Col>
                </Row>

               
                
               
            </Form>
            </Card.Body>
        </Card>
        </Container>
     );
}
 
export default Register;