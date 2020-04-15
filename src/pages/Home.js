/*
    Displays the home page, is called within the topnav in SideBar
    Is loaded upon connection
    Used to display notifications and the graph predictions
    @Notes: Lyka Marcelino, 04/04/2020
 */

import React from 'react';
import {Row, Col} from "react-bootstrap";
import StaticGraph from "../components/graphDisplays/StaticGraph";
import StaticGraph2 from "../components/graphDisplays/StaticGraph2";

const roundblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1300px",
    height: "430px",
    marginLeft: "150px",
    marginTop: "22px",
}

const notifications ={
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1300px",
    height: "160px",
    textAlign: "left",
    marginLeft: "150px",
    marginTop: "30px",
    alignContent: "left"
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
            <Row className="justify-content-md-center">
                <Col md="auto" style={notifications}>
                    <div style={{textAlign:'left', marginLeft: '15px', marginTop: '15px', fontSize: '1.4em', fontWeight:'bold'}}> Notifications</div>
                    <div style={{marginTop:'8px'}}>
                        <i className="fa fa-exclamation-triangle fa-lg" style={{marginLeft: '15px', marginRight: '9px', color:'#800020'}}></i><b>Inventory Warning: </b> There is not enough of <b style={{color:'#585858'}}>Item #06846 </b> to complete project sales on items.
                        <br></br>
                        <i className="fa fa-clock-o fa-lg" style={{marginLeft: '15px', marginRight: '12px'}}></i>Current inventory of <b style={{color:'#585858'}}>Item #06879</b>  will last until next week.
                        <br></br>
                        <i className="fa fa-lightbulb-o fa-lg" style={{marginLeft: '15px', marginRight: '12px', color:'yellow'}}></i> Sales for <b style={{color:'#585858'}}> Item #08096 </b> are projected to sell at a higher rate than expected!
                    </div>
                </Col>
            </Row>
        </div>

    </>
)