import { Card, Col, Form, Row } from "react-bootstrap";
import { Cities, VehicleTypes } from "../constants";

const Filter = () => {
    return ( 
        <Card className="filter-card">
            <Card.Body  className="card-body-filter">
                <Row>
                
                    <Col lg={2} className="side-header-box" >
                        <p style={{padding:"5px", textAlign:"center", fontSize:"17px", fontWeight:"bold"}}>LOOKING FOR A SPECIFIC AUTOMOBILE</p>
                    </Col> 

                    <Col lg={8}>
                        <Row style={{marginTop:"20px"}}>

                            <Col>
                                <Form.Group controlId="formGridState">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option style={{color:"white", backgroundColor:"#092a46"}} >Any Type</option>
                                    {VehicleTypes.map((type)=> {
                                             return(<option value={type}> {type} </option>)
                                    }
                                    )}
                                </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formGridState">
                                <Form.Control as="select" defaultValue="Any city">
                                    <option style={{color:"white", backgroundColor:"#092a46"}}>Any City</option>
                                    {Cities.map((type,index)=> {
                                        return(<option value={type} style={{color:"#1a6aae"}} id={index}> {type} </option>)
                                    }
                                    )}
                                </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Any make"  />
                                </Form.Group>

                            </Col>
                        </Row>

                        <Row>
                            
                        </Row>

                    </Col>

                    <Col lg={2} className="side-header-box" >
                    </Col>
                    
                    


                </Row>
            </Card.Body>
         
        </Card>
        
    );
}
 
export default Filter;