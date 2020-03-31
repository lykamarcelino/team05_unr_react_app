//We'll have to handle and create states for the choices of the dropdown menu
//We may have to separate the different drop down menus and create the if statements for the options

import React from 'react';
import {Form, Button, Dropdown} from 'react-bootstrap';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    textAlign: "center",
    marginLeft: "220px",
    marginTop: "40px",
    alignContent: "center",
}

export const NewReport = (props) => (
    <>
    <div style={newblock}>
        <div style={{alignContent: 'center', fontSize:'1.8em', fontWeight:'bold'}}> Generate a New Report</div>
        <br></br>
        <div style={{textAlign: 'left', alignContent:'center'}}>
        <Form style={{marginLeft: '20px', marginRight: '20px'}}>
            <Form.Group controlId="formFileName">
                <Form.Label>File Name</Form.Label>
                <Form.Control size="sm" placeholder="My New Report" />
            </Form.Group>
            <Dropdown style={{marginTop: '10px'}}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">Type of Prediction</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Sales</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Items</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Customer</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{marginTop: '10px'}}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">Type of Graph</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Bar</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Line</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Pie</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Scatterplot</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{marginTop: '10px'}}>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">Time Period</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Daily</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Monthly</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Form.Group id="formGridCheckbox" style={{textAlign: 'center'}}>
                <Form.Check type="checkbox" label="Confirm Selection" />
            </Form.Group>

            <Button variant="dark" type="submit" style={{textAlign: 'center', marginLeft: '540px'}}>
                Submit
            </Button>

        </Form>
        </div>
    </div>
    </>
)