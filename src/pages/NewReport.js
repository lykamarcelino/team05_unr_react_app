import React from 'react';
import {Form, Button} from 'react-bootstrap';

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
        <div style={{alignContent: 'center', fontSize:'1em', color:'red'}}> Forms will be changed for generating the reports</div>
        <br></br>
        <div style={{textAlign: 'left', alignContent:'center'}}>
        <Form style={{marginLeft: '20px', marginRight: '20px'}}>
            <Form.Group controlId="formFileName">
                <Form.Label>File Name</Form.Label>
                <Form.Control size="sm" placeholder="My New Report" />
            </Form.Group>

            <Form.Group id="formGridCheckbox" style={{textAlign: 'center'}}>
                <Form.Check type="checkbox" label="Confirm Changes" />
            </Form.Group>

            <Button variant="dark" type="submit" style={{textAlign: 'center', marginLeft: '540px', marginTop:'20px'}}>
                Submit
            </Button>

        </Form>
        </div>
    </div>
    </>
)