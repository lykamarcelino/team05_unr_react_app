import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';

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
    alignText: "center"
}

export const NewReport = (props) => (
    <>
    <div style={newblock}>
        <div style={{alignContent: 'center', fontSize:'1.8em', fontWeight:'bold'}}> Generate a New Report</div>
        <br></br>
        <div style={{alignContent: 'center', fontSize:'1em', color:'red'}}> Forms will be changed for generating the reports</div>
        <br></br>
        <Form>
            <Form.Group controlId="formFilePath">
                <Form.Label>File Path</Form.Label>
                <Form.Control placeholder="Save to Desktop" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    </>
)