import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {

   

    const [isSaved, setIsSaved] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    function handleSaveClick(e) {
        console.log('save clicked');
        e.preventDefault();
        setIsEditing(false);
        setIsSaved(true);
        
    }

    function handleEditClick(e) {
        console.log('edit clicked');
        e.preventDefault();
        setIsEditing(true);
        setIsSaved(false);
        
    }


    return ( 
        <Container>
        <Container className="register-box" >
            <Card >
                <Card.Header  className="register-card-title text-center">PROFILE</Card.Header>
            <Card.Body>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">First Name*</Form.Label>
                            <Form.Control type="text" placeholder="" disabled={isSaved} />
                        </Form.Group>

                    </Col>
                
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Last Name*</Form.Label>
                            <Form.Control type="text" placeholder="" disabled={isSaved} />
                        </Form.Group>

                    </Col>

                </Row>
                <Row>
                    <Col >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Email*</Form.Label>
                            <Form.Control type="email" placeholder=""  disabled={isSaved} />
                        </Form.Group>

                    </Col>
                
                </Row>
                
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="form-text">Current Password*</Form.Label>
                            <Form.Control type="password" disabled={isSaved} />
                         </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formBasicPassword" >
                            <Form.Label className="form-text" >New Password*</Form.Label>
                            <Form.Control type="password" disabled={isSaved}  />
                         </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="formBasicPassword" >
                            <Form.Label className="form-text" >Confirm New Password*</Form.Label>
                            <Form.Control type="password" disabled={isSaved}  />
                         </Form.Group>

                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col sm="auto" lg="auto" >
                    <Button 
                    variant="primary" 
                    type="submit" 
                    className="register-btn"
                    disabled={isEditing}
                    onClick={(e)=>handleEditClick(e)}
                    >
                        Edit
                    </Button>

                    </Col>
                    <Col sm="auto" lg="auto" >
                    <Button 
                    variant="primary" 
                    type="submit" 
                    className="register-btn"
                    disabled={isSaved}
                    onClick={ e=>  handleSaveClick(e)}
                    >
                        Save
                    </Button>

                    </Col>
                </Row>

            </Form>
            </Card.Body>
            </Card>
        </Container>
        {/* temo butto */}
        <Button variant="primary"  className="register-btn" >
        <Link to='/add'>
            Add your Advertisment
        </Link>
        </Button>
        </Container>

     );
}
 
export default Profile;