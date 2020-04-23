/*
    Displays the home page, is called within the topnav in SideBar
    Is loaded upon connection
    Used to display notifications and the graph predictions
    @Notes: Lyka Marcelino, 04/04/2020
 */

import React from 'react';
import {Row} from "react-bootstrap";
import StaticGraph from "../components/graphDisplays/StaticGraph";
import StaticGraph2 from "../components/graphDisplays/StaticGraph2";
import Notifications from "../components/Notifications";

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
                    <div style={{alignContent: 'left', marginLeft: '25px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold'}}> User Dashboard</div>
                    <StaticGraph/>
                    <StaticGraph2/>
                </div>
            </Row>
          <Notifications/>
        </div>

    </>
)