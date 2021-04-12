import { Col, Container, Row } from "react-bootstrap";
import Filter from "./filter";
import VehicleCard from "./vehicleCard";

const Market = () => {
    return ( 
        <Container fluid>
            <Container fluid style={{marginTop:"40px"}}>
                <Filter/>
            </Container>

            <Container fluid style={{marginTop:"50px" }}>
                <h3 style={{marginBottom:"0px", color:"#1a6aae"}}>FEATURED VEHICLES</h3>
                <hr className="main-heading-hr" />

                <Row className="justify-content-center" >
                    <Col  xl={6} style={{marginBottom:"20px" }}  >
                    <VehicleCard liked={false} isprofileCard={false} />

                    </Col>

                    <Col  xl={6} style={{marginBottom:"20px"}} >
                    <VehicleCard liked={true} isprofileCard={false} />

                    </Col>

          
                </Row>

              


            </Container>

        </Container>
     );
}
 
export default Market;