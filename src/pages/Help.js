/*
    Displays the help page for the application, is called within the topnav in SideBar
    Instructions for generating a report
    @Notes: Lyka Marcelino, 04/04/2020
 */

import React from 'react';
import Instructions from "../static/Generate_Instructions.png";

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    marginLeft: "220px",
    marginTop: "40px",
}

export const Help = () => (
    <>
    <div style={newblock}>
        <div style={{alignContent: 'center', marginLeft: '390px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold'}}> Welcome to Sales Forecasting!</div>
        <div style={{alignContent: 'left', marginLeft: '35px', marginTop: '20px', fontSize:'1.2em'}}>
            To generate a new report, click on the Generate tab. <br></br>
            Input your report details into the fields. <br></br>
            Click complete! <br></br>

            <img src={Instructions} alt="Instructions" hspace="20" style={{marginLeft: '300px'}}/>
        </div>
    </div>
    </>
)