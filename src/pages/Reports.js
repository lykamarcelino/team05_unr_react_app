import React from 'react';
import {Table} from 'react-bootstrap';
import './styles.css';

export const Reports = (props) => (
    <>
        <div style={{marginLeft: '140px',marginTop: '0px',fontSize: '2.5rem'}}>View Reports</div>

        <div style={{marginTop: '20px', marginLeft: '265px', width: '1100px', height: '400px'}}>
            <Table striped bordered hover variant={"dark"} layout={"true"}>
                <thead>
                <tr>
                    <th>Report #</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Predicted Sales.pdf</td>
                    <td>Sales</td>
                    <td>08/09/2020</td>
                    <td>Sales for the Month of August</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Predicted Sales 1.pdf</td>
                    <td>Sales</td>
                    <td>09/09/2020</td>
                    <td>Sales for the Month of September</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Predicted Sales 2.pdf</td>
                    <td>Sales</td>
                    <td>10/09/2020</td>
                    <td>Sales for the Month of October</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Predicted Inventory.pdf</td>
                    <td>Inventory</td>
                    <td>08/09/2020</td>
                    <td>Inventory for the Month of August</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Predicted Inventory1.pdf</td>
                    <td>Inventory</td>
                    <td>09/09/2020</td>
                    <td>Inventory for the Month of September</td>
                </tr>
                </tbody>
            </Table>
        </div>
    </>
)