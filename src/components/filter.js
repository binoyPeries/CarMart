import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Cities, VehicleTypes } from "../constants";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
    const [price,setPrice] = useState(700000);
    return ( 
        <Card className="filter-card ">
            <Card.Body  className="card-body-filter">
                <Row >
                
                    <Col lg={2} className="side-header-box" >
                        <p style={{ textAlign:"center", fontSize:"18px", fontWeight:"bold"}}>
                        LOOKING FOR A <br/> VEHICLE
                        
                        </p>
                    </Col> 

                    <Col lg={8}>
                        <Row style={{marginTop:"20px"}}>

                            <Col sm={6} md={3}>
                                <Form.Group controlId="formGridState">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Any Type</option>
                                    {VehicleTypes.map((type)=> {
                                             return(<option value={type} > {type} </option>)
                                    }
                                    )}
                                </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col sm={6} md={3}>
                                <Form.Group controlId="formGridState">
                                <Form.Control as="select" defaultValue="Any city">
                                    <option >Any City</option>
                                    {Cities.map((type,index)=> {
                                        return(<option value={type}  id={index}> {type} </option>)
                                    }
                                    )}
                                </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col sm={6} md={3}>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Any make"  />
                                </Form.Group>

                            </Col>

                            <Col sm={6} md={3}>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Any model"  />
                                </Form.Group>

                            </Col>
                        </Row>

                        <Row>
                            <Col lg={5}>
                            <Form.Label  style={{fontSize:"14px", color:"#1a6aae", marginBottom:"0px", fontWeight:"500"}}>
                                CONDITION
                            </Form.Label>
                            <fieldset>
                                <Form.Group >
                                <Form.Check inline label="ALL" type='radio' id='all' name="condition" />
                                <Form.Check inline label="NEW" type='radio' id='new' name="condition"  />
                                <Form.Check inline label="USED" type='radio' id='used' name="condition"  />
                                </Form.Group>
                            </fieldset>                            

                            </Col>

                            <Col lg={7}>
                            <Form.Group  controlId="formBasicRange">
                             <Form.Label style={{fontSize:"14px", color:"#1a6aae", marginBottom:"0px", fontWeight:"500"}}> MAX PRICE {price.toLocaleString()} LKR</Form.Label>
                                 <Form.Control type="range" min="400000" max="10000000" value= {price} step="100000" onChange={(e)=> setPrice(e.target.value)}/>
                            </Form.Group>
                            </Col>

                        </Row>
                        
                        
                           
                       

                    </Col>
                    
                    <Col lg={2} className="side-header-box text-center" >
                    <p style={{paddingTop:"15px" , fontSize:"20px", fontWeight:"bold"}}>
                    SEARCH  <br/>
                    <FontAwesomeIcon icon={faArrowRight} style={{ fontSize:"40px"}}/>
                    </p>
                   
                      
                    </Col>
                    
                    


                </Row>
            </Card.Body>
         
        </Card>
        
    );
}
 
export default Filter;