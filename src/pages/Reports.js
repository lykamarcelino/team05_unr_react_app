import React from 'react';
import {Table} from 'react-bootstrap';
import './styles.css';

export const Reports = (props) => (
    <>
        <div style={{marginLeft: '210px',marginTop: '0px',fontSize: '3rem'}}>View Reports</div>

        <div style={{ marginTop: '15px', marginLeft: '310px', width: '1100px', height: '400px'}}>
            <Table striped bordered hover layout={"true"}>
                <thead>
                <tr>
                    <th>Entry #</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>08/09/2020</td>
                </tr>
                </tbody>
            </Table>
        </div>
    </>
)