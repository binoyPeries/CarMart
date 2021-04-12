import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Login = () => {
    return (  
        <Container className="login-box">
        <Card className="login-card">
                <Card.Header  className="register-card-title text-center">LOGIN</Card.Header>
            <Card.Body>
            <Form>
                <Row>
                    <Col  >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Email*</Form.Label>
                            <Form.Control type="email" placeholder=""  />
                        </Form.Group>

                    </Col>
                
                </Row>
                <Row>
                    <Col >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Password*</Form.Label>
                            <Form.Control type="password" placeholder=""  />
                        </Form.Group>

                    </Col>
               
                
                </Row>
                
                
                <Row>
                    <Col className="text-center">
                    <Button variant="primary" type="submit" className="register-btn">
                        Login
                    </Button>

                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                    <p style={{marginTop:"10px", fontSize:"17px", color:"#25A7F7"}}>
                    <span>
                    Don't have an account yet? 
                    </span>
                    <span style={{color:"#092a46", fontWeight:"500"}}>
                     <Link to='/register'> Register</Link>

                    </span>
                    
                    </p>

                    </Col>
                </Row>

               
                
               
            </Form>
            </Card.Body>
        </Card>
        </Container>
    );
}
 
export default Login;