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
    
    const isprofileCard = props.isprofileCard
    
    const [isliked, setIsliked] =  useState(props.liked);
    const toggleLike = ()=>{
        setIsliked(!isliked);
    }
    return ( 
        
        <Card  className="vehicle-card">
            <Card.Body style={{padding:"10px"}}>
                <Row>
                    <Col sm ={5} >
                    <img src={fronImg} alt="" style={{maxHeight:"150px"}} />
                    </Col>
                    <Col sm={5} style={{paddingLeft:"0px"}} >
                        
                        <h4 style={{fontWeight:"600", marginBottom:"20px"}} className="text-center"> 
                        <span>TOYOTA CIVIC 2010 </span> 
                        {/* <FontAwesomeIcon icon={ isliked == true ? solidHeart : heart } size="1x" style={{color:"#1a6aae",}} onClick={toggleLike} /> */}
                        </h4>
                        <h5 style={{color:"black"}} > LKR 2,500,000</h5>
                        <h6 style={{color:"black"}} > Colombo, Sri Lanka</h6>

                        { !isprofileCard ?
                            <div className="text-left">
                            <FontAwesomeIcon icon={ isliked == true ? solidHeart : heart }  style={{color:"#1a6aae",fontSize:"20px"}} onClick={toggleLike} /> 
                            <span onClick={toggleLike} style={{cursor:"pointer",userSelect:"none",fontWeight:"600"}}> { isliked == true ? 'Remove from Favourites' : 'Add to Favourites' } </span> 

                        </div>
                        :

                        <h6 style={{color:"black"}} > Posted Date: 05/04/2021 </h6>

                        }
                        
                    
                    </Col>
                    <Link to='/'  className="see-more">
                    <Col sm={2}>
                    <FontAwesomeIcon icon={faChevronRight}  style={{color:"#1a6aae",fontSize:"50px"}}/>
                    </Col>
                    </Link>
                </Row>
                
            </Card.Body>
        </Card>
         );
}
 
export default VehicleCard;