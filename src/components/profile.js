import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VehicleCard from './vehicleCard';
import { Cities } from '../constants';



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
        <Container fluid >
        <Container className="register-box" >
            <Card className="common-card-outline" >
                <Card.Header  className="register-card-title text-center">PROFILE</Card.Header>
            <Card.Body>
            <Form>
                <Row>
                    <Col lg={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">First Name*</Form.Label>
                            <Form.Control type="text" placeholder="" disabled={isSaved} />
                        </Form.Group>

                    </Col>
                
                    <Col  lg={6} >
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
                    <Col  lg={6} >

                    <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Contact No*</Form.Label>
                            <Form.Control type="number" placeholder="" disabled={isSaved} />
                    </Form.Group>

                    </Col>

                    <Col  lg={6}>
                    <Form.Group controlId="formGridState">
                        <Form.Label className="form-text">City</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." disabled={isSaved}>
                            <option style={{color:"#1a6aae",fontWeight:"bold"}}>Select City</option>
                            {Cities.map((type)=> {
                                return(<option value={type} style={{color:"#1a6aae"}}> {type} </option>)
                            }
                            )}
                    </Form.Control>
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

                <Row >
                <Col  className="text-center">
                    {isSaved ? 
                        
                    <Button 
                    variant="primary" 
                    type="submit" 
                    className="save-btn"
                    onClick={(e)=>handleEditClick(e)}
                    >
                    Edit
                    </Button> 
                    :
                    <Button 
                    variant="primary" 
                    type="submit" 
                    className="save-btn"
                    
                    onClick={ e=>  handleSaveClick(e)}
                    >
                    Save
                    </Button>
                    
                    }

                    </Col>
                
                </Row>

            </Form>
            </Card.Body>
            </Card>
        
        </Container>
                    
        <h2 className="profile-post-header"><span>YOUR ADVERTISEMENTS</span> </h2>


        <Container fluid>
        <Row className="justify-content-center" >
           <Col lg={12} xl={6} style={{marginBottom:"20px" }} >
           <VehicleCard liked={false} isprofileCard={true} />

           </Col>

           <Col lg={12} xl={6} style={{marginBottom:"20px"}} >
           <VehicleCard liked={true} isprofileCard={true} />

           </Col>

          
       </Row>

       <Row className="justify-content-center" >
            <Col lg={12} xl={6} style={{marginBottom:"20px"}}  >
                <VehicleCard liked={true} isprofileCard={true}  />

           </Col>

           <Col lg={12} xl={6} style={{marginBottom:"20px"}} >
            <VehicleCard liked={true} isprofileCard={true} />

           </Col>
           
       </Row>
       <br/>

       <Row className="justify-content-center">
        
        <Link to='/add'>
                <Button variant="primary"  className="save-btn" style={{fontSize:"20px"}}>
                   POST NEW AD
                </Button>
        </Link>

       </Row>

        </Container>
       
        
       

       
        
        
        </Container>

     );
}
 
export default Profile;