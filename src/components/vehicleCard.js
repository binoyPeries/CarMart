import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fronImg from '../images/front.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight , faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heart}  from '@fortawesome/fontawesome-free-regular';

import { Link } from 'react-router-dom';
import { useState } from 'react';



const VehicleCard = (props) => {
    
    const [isliked, setIsliked] =  useState(props.liked);
    const toggleLike = ()=>{
        setIsliked(!isliked);
    }
    return ( 
        
        <Card  className="vehicle-card">
            <Card.Body style={{padding:"10px"}}>
                <Row>
                    <Col lg={5} >
                    <img src={fronImg} alt="" style={{maxHeight:"150px"}} />
                    </Col>
                    <Col lg={5} style={{paddingLeft:"0px"}} >
                        
                        <h4 style={{fontWeight:"600"}} className="text-right"> 
                        <span style={{paddingRight:"20px"}}>TOYOTA CIVIC</span> 
                        <FontAwesomeIcon icon={ isliked == true ? solidHeart : heart } size="1x" style={{color:"#1a6aae",}} onClick={toggleLike} />
                        </h4>
                        <br/>
                        <h5 style={{color:"black"}}> Year 2010</h5>
                        <h4 style={{color:"black"}} > LKR 2,500,000</h4>
                        <div className="text-left">

                        </div>
                    
                    </Col>
                    <Link to='/'  className="see-more">
                    <Col lg={2}>
                    <FontAwesomeIcon icon={faChevronRight} size="3x" color={{color:"#1a6aae"}}/>
                    </Col>
                    </Link>
                </Row>
                
            </Card.Body>
        </Card>
         );
}
 
export default VehicleCard;