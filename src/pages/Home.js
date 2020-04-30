/*
    Displays the home page, is called within the topnav in SideBar
    Is loaded upon connection
    Used to display notifications and the graph predictions
    @Notes: Lyka Marcelino and Liliana Pacheco, 04/04/2020
 */

import React from 'react';
import {Row, Col} from "react-bootstrap";
import Notifications from "../components/Notifications";
import FetchStaticGraph from "../components/graphDisplays/FetchStaticGraph";
import FetchStaticGraph2 from "../components/graphDisplays/FetchStaticGraph2";

const roundblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1300px",
    height: "430px",
    marginLeft: "150px",
    marginTop: "22px",
}

export const Home = (props) => (
    <>
        <div>
            <Row className="justify-content-md-center">
                <div style = {roundblock}>
                    <Row>
                        <div style={{alignContent: 'left', marginLeft: '40px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold'}}> User Dashboard</div>
                    </Row>
                    <div style = {{marginLeft: '25px', marginRight: '25px', marginTop: '20px', height: "320px"}}>
                        <Row md = "auto">
                            <Col>
                                <div style = {{height: '320px'}}>
                                    <FetchStaticGraph/>
                                </div>
                            </Col>

                            <Col>
                                <div style = {{height: '320px'}}>
                                    <FetchStaticGraph2/>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </Row>
          <Notifications/>
        </div>
    </>
)