import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const roundblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "5000px",
    height: "400px",
    marginLeft: "115px",
    marginTop: "24px",
}

const notifications ={
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "5010px",
    height: "200px",
    textAlign: "left",
    marginLeft: "115px",
    marginTop: "24px",
    alignContent: "left"
}


export const Home = (props) => (
    <>
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" style = {roundblock}>
                    <div style={{alignContent: 'left', marginLeft: '10px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold'}}> User Dashboard</div>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto" style={notifications}>
                    <div style={{textAlign:'left', marginLeft: '30px', marginTop: '20px', fontSize: '1.4em', fontWeight:'bold'}}> Notifications</div>
                    <div style={{marginTop:'5px'}}>
                        <i className="fa fa-exclamation-triangle" style={{marginLeft: '30px', marginRight: '9px'}}></i> Inventory warning there is not enough ____ to complete project sales on items.
                        <br></br>
                        <i className="fa fa-clock-o" style={{marginLeft: '30px', marginRight: '12px'}}></i>Current Inventory of item ____ will last until next week.
                        <br></br>
                        <i className="fa fa-lightbulb-o" style={{marginLeft: '30px', marginRight: '12px'}}></i> Sales for item _____ are projected to sell at a higher rate than expected!
                    </div>
                </Col>
            </Row>
        </Container>

    </>


)