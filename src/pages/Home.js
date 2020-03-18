import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const roundblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "5000px",
    height: "400px",
    textAlign: "center",
    marginLeft: "190px",
    marginTop: "24px",
    alignContent: "center"
}

const notifications ={
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "5010px",
    height: "200px",
    textAlign: "center",
    marginLeft: "190px",
    marginTop: "24px",
    alignContent: "center"
}


export const Home = (props) => (
    <>
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" style = {roundblock}>For User Dashboard
                    <br></br>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto" style={notifications}>For Notifications</Col>
            </Row>
        </Container>

    </>


)