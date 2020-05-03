/*
*   Name: Invoices.js
*   Description: This component is used to retrieve the data from the backend regarding invoices
*   The data is then displayed as a table in the QBData tab
*   Date: 05/02/2020
*   Author: Lyka Marcelino
* */

import React from 'react';
import {Table} from "react-bootstrap";

export default class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getInvoice', {method: 'GET'})
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
                <div style={{marginTop: '20px', marginLeft: '100px', width: '1100px', height: '400px'}}>
                    <Table striped bordered hover variant={true} size="sm">
                        <thead>
                        <tr>
                            <th>Invoice Name</th>
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
                        <tr>
                            <td>{names[6]}</td>
                            <td>{des[6]}</td>
                            <td>{doc[6]}</td>
                            <td>{txn[6]}</td>
                            <td>{qty[6]}</td>
                            <td>{price[6]}</td>
                        </tr>
                        <tr>
                            <td>{names[7]}</td>
                            <td>{des[7]}</td>
                            <td>{doc[7]}</td>
                            <td>{txn[7]}</td>
                            <td>{qty[7]}</td>
                            <td>{price[7]}</td>
                        </tr>
                        <tr>
                            <td>{names[8]}</td>
                            <td>{des[8]}</td>
                            <td>{doc[8]}</td>
                            <td>{txn[8]}</td>
                            <td>{qty[8]}</td>
                            <td>{price[8]}</td>
                        </tr>
                        <tr>
                            <td>{names[9]}</td>
                            <td>{des[9]}</td>
                            <td>{doc[9]}</td>
                            <td>{txn[9]}</td>
                            <td>{qty[9]}</td>
                            <td>{price[9]}</td>
                        </tr>
                        <tr>
                            <td>{names[10]}</td>
                            <td>{des[10]}</td>
                            <td>{doc[10]}</td>
                            <td>{txn[10]}</td>
                            <td>{qty[10]}</td>
                            <td>{price[10]}</td>
                        </tr>
                        <tr>
                            <td>{names[11]}</td>
                            <td>{des[11]}</td>
                            <td>{doc[11]}</td>
                            <td>{txn[11]}</td>
                            <td>{qty[11]}</td>
                            <td>{price[11]}</td>
                        </tr>
                        <tr>
                            <td>{names[12]}</td>
                            <td>{des[12]}</td>
                            <td>{doc[12]}</td>
                            <td>{txn[12]}</td>
                            <td>{qty[12]}</td>
                            <td>{price[12]}</td>
                        </tr>
                        <tr>
                            <td>{names[13]}</td>
                            <td>{des[13]}</td>
                            <td>{doc[13]}</td>
                            <td>{txn[13]}</td>
                            <td>{qty[13]}</td>
                            <td>{price[13]}</td>
                        </tr>
                        <tr>
                            <td>{names[14]}</td>
                            <td>{des[14]}</td>
                            <td>{doc[14]}</td>
                            <td>{txn[14]}</td>
                            <td>{qty[14]}</td>
                            <td>{price[14]}</td>
                        </tr>
                        <tr>
                            <td>{names[15]}</td>
                            <td>{des[15]}</td>
                            <td>{doc[15]}</td>
                            <td>{txn[15]}</td>
                            <td>{qty[15]}</td>
                            <td>{price[15]}</td>
                        </tr>
                        <tr>
                            <td>{names[16]}</td>
                            <td>{des[16]}</td>
                            <td>{doc[16]}</td>
                            <td>{txn[16]}</td>
                            <td>{qty[16]}</td>
                            <td>{price[16]}</td>
                        </tr>
                        <tr>
                            <td>{names[17]}</td>
                            <td>{des[17]}</td>
                            <td>{doc[17]}</td>
                            <td>{txn[17]}</td>
                            <td>{qty[17]}</td>
                            <td>{price[17]}</td>
                        </tr>
                        <tr>
                            <td>{names[17]}</td>
                            <td>{des[17]}</td>
                            <td>{doc[17]}</td>
                            <td>{txn[17]}</td>
                            <td>{qty[17]}</td>
                            <td>{price[17]}</td>
                        </tr>
                        <tr>
                            <td>{names[18]}</td>
                            <td>{des[18]}</td>
                            <td>{doc[18]}</td>
                            <td>{txn[18]}</td>
                            <td>{qty[18]}</td>
                            <td>{price[18]}</td>
                        </tr>
                        <tr>
                            <td>{names[19]}</td>
                            <td>{des[19]}</td>
                            <td>{doc[19]}</td>
                            <td>{txn[19]}</td>
                            <td>{qty[19]}</td>
                            <td>{price[19]}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>

            </>

        );

    }
}

