/*
*   Name: Settings.js
*   Used to modify user settings
*   Display for the settings tab of the application
*   Date: 05/02/2020
*   Author: Lyka Marcelino
* */

import React, {useState, useRef} from 'react';
import {ToggleButton, ToggleButtonGroup, Button, Overlay, Tooltip} from "react-bootstrap";

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    marginLeft: "250px",
    marginTop: "40px",
}

function ToggleButtonGroupControlled() {
    const [value, setValue] = useState([1, 3]);
    const handleChange = (val) => setValue(val);
    return (
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton variant="dark" value={1}>Yes</ToggleButton>
            <ToggleButton variant="dark" value={2}>No</ToggleButton>
        </ToggleButtonGroup>
    );
}

function PopUp() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button variant= "secondary" ref={target} onClick={() => setShow(!show)}>
                Save Changes
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Changes Saved!
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}

export const Settings = (props) => (
    <>
        <div style={newblock}>
            <div style={{alignContent: 'center', marginLeft: '500px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold', paddingTop: '30px'}}> User Settings </div>
            <div style={{alignContent: 'left', marginLeft: '35px', marginTop: '30px', fontSize:'1.2em'}}> Modify your user settings here:
                <br></br>
                <div style={{alignContent: 'center', marginLeft:'380px', marginRight:'20px', paddingLeft:'20px'}}>
                    Receive Weekly Reports &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <ToggleButtonGroupControlled />
                    <br></br> <br></br>
                    Send Report to Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <ToggleButtonGroupControlled />
                    <br></br> <br></br>
                    Keep Reports Until Deleted &nbsp; &nbsp; &nbsp;
                    <ToggleButtonGroupControlled />
                </div>
                <div style={{marginTop: '70px', marginLeft:'500px'}}><PopUp/><div>
            </div>
        </div>
            </div>
        </div>
    </>
)