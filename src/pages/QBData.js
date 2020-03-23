import React from 'react';
import {Table} from 'react-bootstrap';
import './styles.css';

export const QBData = (props) => (
    <>
        <div style={{marginLeft: '140px',marginTop: '0px',fontSize: '2.5rem'}}>View QuickBooks Data</div>

        <div style={{marginTop: '20px', marginLeft: '265px', width: '1100px', height: '400px'}}>
            <Table striped bordered hover layout="true" size="sm">
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
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>@user</td>
                    <td>08/09/2020</td>
                </tr>
                </tbody>
            </Table>
        </div>
    </>
)