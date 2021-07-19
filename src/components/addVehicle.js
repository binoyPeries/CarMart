import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import { VehicleTypes } from '../constants';
import { FormControl } from 'react-bootstrap';
import ImageUploader from './imageUploader';

const AddVehicle = () => {
    return ( 
        <Container className="register-box" >
            <Card className="common-card-outline">
            <Card.Header  className="register-card-title text-center">VEHICLE INFORMATION</Card.Header>
            <Card.Body>
            <Form>
                <Card.Title  className="add-vehicle-sub-heading">Basic Information</Card.Title>

                <Row>
                    <Col lg={3}>
                        <Form.Group controlId="formGridState">
                        <Form.Label className="form-text">Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Select Type</option>
                            {VehicleTypes.map((type,index)=> {
                                return(<option value={type} key={index}> {type} </option>)
                            }
                            )}
                        </Form.Control>
                        </Form.Group>
                    </Col>
                
                    <Col lg={4}>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Make</Form.Label>
                            <Form.Control type="text" placeholder="ex: Toyota"  />
                        </Form.Group>                     
                    </Col>

                    <Col lg={5}>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Model</Form.Label>
                            <Form.Control type="text" placeholder="ex: Civic"  />
                        </Form.Group>                     
                    </Col>

                </Row>
                            <br/>
                <Row>
                    <Col lg={3} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-text">Year</Form.Label>
                            <Form.Control type="number" placeholder="ex: 2011"  />
                        </Form.Group>                     
                    </Col>

                    <Col lg={4}>
                        <Form.Group controlId="formGridState">
                        <Form.Label className="form-text">Condition</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option key="1" >Select </option>
                            <option key="2" >Brand New</option>
                            <option key="3" >Used</option>
                            
                        </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col lg={5}>
                            <Form.Label className="form-text">Mileage</Form.Label>
                            <InputGroup className="mb-3">
                            <FormControl
                            type="number"
                            placeholder="mileage"
                            
                            />
                            <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">km</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <hr style={{backgroundColor:"#1a6aae"}}/>
                <Card.Title  className="add-vehicle-sub-heading">Specifications</Card.Title>
                <Row>
                    <Col lg={4}>
                        <Form.Group controlId="formGridState">
                        <Form.Label className="form-text">Transmission</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option key="1">Select </option>
                            <option key="2">Manual</option>
                            <option key="3">Automatic</option>
                            <option key="4">Semi-automatic </option>
                            
                        </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                        <Form.Group controlId="formGridState">
                        <Form.Label className="form-text">Fuel Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option key="1">Select </option>
                            <option key="2">Petrol </option>
                            <option key="3">Diesel</option>
                            <option key="4" >Hybrid</option>
                            <option key="5" >Electric </option>
                            
                        </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                            <Form.Label className="form-text">Engnine Capacity </Form.Label>
                            <InputGroup className="mb-3">
                            <FormControl
                            type="number"
                            placeholder="ex:1000"
                            
                            />
                            <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">CC</InputGroup.Text>
                            </InputGroup.Append>
                            </InputGroup>
                    </Col>                                         
                </Row>

                <hr style={{backgroundColor:"#1a6aae"}}/>
                <Card.Title className="add-vehicle-sub-heading"> Pricing</Card.Title>

                <Row>
                    <Col lg={6}>
                        <Form.Label className="form-text">Price  </Form.Label>
                            <InputGroup className="mb-3">
                            <FormControl
                            type="number"
                            placeholder=""
                            
                            />
                            <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">LKR</InputGroup.Text>
                            </InputGroup.Append>
                            </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="form-text">Description  </Form.Label>
                    <Form.Control as="textarea" rows={5} />
                     </Form.Group>
                    </Col>
                </Row>
                <hr style={{backgroundColor:"#1a6aae"}}/>
                <Card.Title  className="add-vehicle-sub-heading"> Photos</Card.Title>

                <Row>
                    <Col md={12} lg={6}>
                    <ImageUploader imageName="Front View"/>
                    </Col>
                    <Col  md={12}  lg={6}>
                    <ImageUploader imageName="Back View"/>
                    </Col>
                    <Col  md={12}  lg={6}>
                    <ImageUploader imageName="Interior"/>
                    </Col>

                </Row>        

                <Row >
                    <Col className="text-center">
                        <Button variant="primary" type="submit" className="register-btn">
                         Post Ad
                     </Button>
                    </Col>     
                

                </Row>    



            </Form>
            </Card.Body>
            </Card>
        </Container>

     );
}
 
export default AddVehicle;