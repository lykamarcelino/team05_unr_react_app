import React from 'react';
import {ButtonGroup, ToggleButton} from "react-bootstrap";

export const QBData = (props) => (

            <>
                <div style={{marginLeft: '170px',marginTop: '0px',fontSize: '2rem', fontWeight: 'bold'}}>View your QuickBooks Data</div>
                <div style={{marginLeft: '170px', marginTop: '25px'}}>
                <ButtonGroup toggle>
                    <ToggleButton type="radio" name="radio" defaultChecked value="1" variant={"dark"}>
                        Sales
                    </ToggleButton>
                    <ToggleButton type="radio" name="radio" value="2" variant={"dark"}>
                        Invoices
                    </ToggleButton>
                    <ToggleButton type="radio" name="radio" value="3" variant={"dark"}>
                        Estimates
                    </ToggleButton>
                </ButtonGroup>
                </div>

            </>
)

