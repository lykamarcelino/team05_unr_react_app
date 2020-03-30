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
    textAlign: "center",
    marginLeft: "115px",
    marginTop: "24px",
    alignContent: "center"
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
                    <div style={{textAlign:'left', marginLeft: '30px', marginTop: '20px', fontSize: '1.2em', fontWeight:'bold'}}> Notifications </div>
                </Col>
            </Row>
        </Container>

    </>


)