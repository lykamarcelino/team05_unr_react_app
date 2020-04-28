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
    height: "660px",
    marginLeft: "257px",
    marginTop: "17px",
}

export const Help = () => (
    <>
    <div style={newblock}>
        <div style={{alignContent: 'center', marginLeft: '420px', marginTop: '20px', fontSize:'1.4em', fontWeight:'bold'}}> Welcome to Sales Forecasting!</div>
        <div style={{alignContent: 'left', marginLeft: '35px', marginTop: '10px', fontSize:'1em'}}>
            <b>To Generate a New Graph: </b>
            <br></br>
            Click on the Generate tab. <br></br>
            Input your desired choices into the fields. <br></br>
            Click Submit! <br></br>
            <img src={Instructions} alt="Instructions" hspace="30" style={{marginLeft: '200px'}}/>

            <br></br>
            <b>Reading Your Report: </b>
            <br></br>
            Each report contains a cover page and the values selected in your generation.
            <br></br>
            Transaction Data, Customer Information, Inventory Information, the Graph, and Gridlines may all be included.
        </div>
    </div>
    </>
)