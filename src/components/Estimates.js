/*
*   Name: Estimates.js
*   Description: This component is used to retrieve the data from the backend regarding customer estimates
*   The data is then displayed as a table in the QBData tab
*   Date: 05/02/2020
*   Author: Lyka Marcelino
* */

import React from 'react';
import {Table} from "react-bootstrap";

export default class Estimates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getEstimates', {method: 'GET'})
            .then(res => res.json())
            .then(items=>this.setState({items}))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }
    render() {
        const {items} = this.state;
        let itemArray = new Array(items.length);
        let i = 0;
        for(var key in items){
            itemArray[i] = items[key];
            i = i + 1;
        }

        const names = [];
        const des = [];
        const doc =[];
        const txn = [];
        const qty = [];
        const price = [];

        function setNames() {
            for(var x in itemArray[0]){
                var temp = itemArray[0][x];
                names[x] = temp;
            }
        }

        function setDesc() {
            for(var x in itemArray[1]){
                var temp = itemArray[1][x];
                des[x] = temp;
            }
        }

        function setDoc() {
            for(var x in itemArray[2]){
                var temp = itemArray[2][x];
                doc[x] = temp;
            }
        }

        function setTxn() {
            for(var x in itemArray[3]){
                var temp = itemArray[3][x];
                txn[x] = temp;
            }
        }

        function setQuantity() {
            for(var x in itemArray[4]){
                var temp = itemArray[4][x];
                qty[x] = temp;
            }
        }

        function setPrice() {
            for(var x in itemArray[5]){
                var temp = itemArray[5][x];
                price[x] = temp;
            }
        }

        setNames();
        setDesc();
        setDoc();
        setTxn();
        setQuantity();
        setPrice();

        return (
            <>
                <div style={{marginTop: '20px', marginLeft: '155px', width: '1100px', height: '400px'}}>
                    <Table striped bordered hover variant={true} size="sm">
                        <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Document Number</th>
                            <th>Transaction Date</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{names[0]}</td>
                            <td>{des[0]}</td>
                            <td>{doc[0]}</td>
                            <td>{txn[0]}</td>
                            <td>{qty[0]}</td>
                            <td>{price[0]}</td>
                        </tr>
                        <tr>
                            <td>{names[1]}</td>
                            <td>{des[1]}</td>
                            <td>{doc[1]}</td>
                            <td>{txn[1]}</td>
                            <td>{qty[1]}</td>
                            <td>{price[1]}</td>
                        </tr>
                        <tr>
                            <td>{names[2]}</td>
                            <td>{des[2]}</td>
                            <td>{doc[2]}</td>
                            <td>{txn[2]}</td>
                            <td>{qty[2]}</td>
                            <td>{price[2]}</td>
                        </tr>
                        <tr>
                            <td>{names[3]}</td>
                            <td>{des[3]}</td>
                            <td>{doc[3]}</td>
                            <td>{txn[3]}</td>
                            <td>{qty[3]}</td>
                            <td>{price[3]}</td>
                        </tr>
                        <tr>
                            <td>{names[4]}</td>
                            <td>{des[4]}</td>
                            <td>{doc[4]}</td>
                            <td>{txn[4]}</td>
                            <td>{qty[4]}</td>
                            <td>{price[4]}</td>
                        </tr>
                        <tr>
                            <td>{names[5]}</td>
                            <td>{des[5]}</td>
                            <td>{doc[5]}</td>
                            <td>{txn[5]}</td>
                            <td>{qty[5]}</td>
                            <td>{price[5]}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>

            </>

        );

    }
}

