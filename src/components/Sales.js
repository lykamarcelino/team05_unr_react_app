/*
    Component to retrieve the Sales from the QuickBooks API
    Prints the most recent 25 sales from the sandbox
    @Notes: Lyka Marcelino, 04/04/2020
 */

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
        fetch('http://localhost:8080/getInventory', {method: 'GET'})
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
        const itemsArray = [];
        const descNames =[];
        const price = [];
        const quantity = [];

        function setNames() {
            for(var x in itemArray[0]){
                var temp = itemArray[0][x];
                names[x] = temp;
            }
        }

        function setItems() {
            for(var x in itemArray[1]){
                var temp = itemArray[1][x];
                itemsArray[x] = temp;
            }
        }

        function setDesc() {
            for(var x in itemArray[2]){
                var temp = itemArray[2][x];
                descNames[x] = temp;
            }
        }

        function setPrice() {
            for(var x in itemArray[3]){
                var temp = itemArray[3][x];
                price[x] = temp;
            }
        }

        function setQuantity() {
            for(var x in itemArray[3]){
                var temp = itemArray[3][x];
                quantity[x] = temp;
            }
        }

        setNames();
        setItems();
        setPrice();
        setDesc();
        setQuantity();

        return (
            <>
                <div style={{marginTop: '20px', marginLeft: '155px', width: '1100px', height: '400px'}}>
                    <Table striped bordered hover variant={true} size="sm">
                        <thead>
                        <tr>
                            <th>Fully Qualified Name</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{names[0]}</td>
                            <td>{itemsArray[0]}</td>
                            <td>{descNames[0]}</td>
                            <td>{price[0]}</td>
                            <td>{quantity[0]}</td>
                        </tr>
                        <tr>
                            <td>{names[1]}</td>
                            <td>{itemsArray[1]}</td>
                            <td>{descNames[1]}</td>
                            <td>{price[1]}</td>
                            <td>{quantity[1]}</td>
                        </tr>
                        <tr>
                            <td>{names[2]}</td>
                            <td>{itemsArray[2]}</td>
                            <td>{descNames[2]}</td>
                            <td>{price[2]}</td>
                            <td>{quantity[2]}</td>
                        </tr>
                        <tr>
                            <td>{names[3]}</td>
                            <td>{itemsArray[3]}</td>
                            <td>{descNames[3]}</td>
                            <td>{price[3]}</td>
                            <td>{quantity[3]}</td>
                        </tr>
                        <tr>
                            <td>{names[4]}</td>
                            <td>{itemsArray[4]}</td>
                            <td>{descNames[4]}</td>
                            <td>{price[4]}</td>
                            <td>{quantity[4]}</td>
                        </tr>
                        <tr>
                            <td>{names[5]}</td>
                            <td>{itemsArray[5]}</td>
                            <td>{descNames[5]}</td>
                            <td>{price[5]}</td>
                            <td>{quantity[5]}</td>
                        </tr>
                        <tr>
                            <td>{names[6]}</td>
                            <td>{itemsArray[6]}</td>
                            <td>{descNames[6]}</td>
                            <td>{price[6]}</td>
                            <td>{quantity[6]}</td>
                        </tr>
                        <tr>
                            <td>{names[7]}</td>
                            <td>{itemsArray[7]}</td>
                            <td>{descNames[7]}</td>
                            <td>{price[7]}</td>
                            <td>{quantity[7]}</td>
                        </tr>
                        <tr>
                            <td>{names[8]}</td>
                            <td>{itemsArray[8]}</td>
                            <td>{descNames[8]}</td>
                            <td>{price[8]}</td>
                            <td>{quantity[8]}</td>
                        </tr>
                        <tr>
                            <td>{names[9]}</td>
                            <td>{itemsArray[9]}</td>
                            <td>{descNames[9]}</td>
                            <td>{price[9]}</td>
                            <td>{quantity[9]}</td>
                        </tr>
                        <tr>
                            <td>{names[10]}</td>
                            <td>{itemsArray[10]}</td>
                            <td>{descNames[10]}</td>
                            <td>{price[10]}</td>
                            <td>{quantity[10]}</td>
                        </tr>
                        <tr>
                            <td>{names[11]}</td>
                            <td>{itemsArray[11]}</td>
                            <td>{descNames[11]}</td>
                            <td>{price[11]}</td>
                            <td>{quantity[11]}</td>
                        </tr>
                        <tr>
                            <td>{names[12]}</td>
                            <td>{itemsArray[12]}</td>
                            <td>{descNames[12]}</td>
                            <td>{price[12]}</td>
                            <td>{quantity[12]}</td>
                        </tr>
                        <tr>
                            <td>{names[13]}</td>
                            <td>{itemsArray[13]}</td>
                            <td>{descNames[13]}</td>
                            <td>{price[13]}</td>
                            <td>{quantity[13]}</td>
                        </tr>
                        <tr>
                            <td>{names[14]}</td>
                            <td>{itemsArray[14]}</td>
                            <td>{descNames[14]}</td>
                            <td>{price[14]}</td>
                            <td>{quantity[14]}</td>
                        </tr>
                        <tr>
                            <td>{names[15]}</td>
                            <td>{itemsArray[15]}</td>
                            <td>{descNames[15]}</td>
                            <td>{price[15]}</td>
                            <td>{quantity[15]}</td>
                        </tr>
                        <tr>
                            <td>{names[16]}</td>
                            <td>{itemsArray[16]}</td>
                            <td>{descNames[16]}</td>
                            <td>{price[16]}</td>
                            <td>{quantity[16]}</td>
                        </tr>
                        <tr>
                            <td>{names[17]}</td>
                            <td>{itemsArray[17]}</td>
                            <td>{descNames[17]}</td>
                            <td>{price[17]}</td>
                            <td>{quantity[17]}</td>
                        </tr>
                        <tr>
                            <td>{names[18]}</td>
                            <td>{itemsArray[18]}</td>
                            <td>{descNames[18]}</td>
                            <td>{price[18]}</td>
                            <td>{quantity[18]}</td>
                        </tr>
                        <tr>
                            <td>{names[19]}</td>
                            <td>{itemsArray[19]}</td>
                            <td>{descNames[19]}</td>
                            <td>{price[19]}</td>
                            <td>{quantity[19]}</td>
                        </tr>
                        <tr>
                            <td>{names[20]}</td>
                            <td>{itemsArray[20]}</td>
                            <td>{descNames[20]}</td>
                            <td>{price[20]}</td>
                            <td>{quantity[20]}</td>
                        </tr>
                        <tr>
                            <td>{names[21]}</td>
                            <td>{itemsArray[21]}</td>
                            <td>{descNames[21]}</td>
                            <td>{price[21]}</td>
                            <td>{quantity[21]}</td>
                        </tr>
                        <tr>
                            <td>{names[22]}</td>
                            <td>{itemsArray[22]}</td>
                            <td>{descNames[22]}</td>
                            <td>{price[22]}</td>
                            <td>{quantity[22]}</td>
                        </tr>
                        <tr>
                            <td>{names[23]}</td>
                            <td>{itemsArray[23]}</td>
                            <td>{descNames[23]}</td>
                            <td>{price[23]}</td>
                            <td>{quantity[23]}</td>
                        </tr>
                        <tr>
                            <td>{names[24]}</td>
                            <td>{itemsArray[24]}</td>
                            <td>{descNames[24]}</td>
                            <td>{price[24]}</td>
                            <td>{quantity[24]}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>

            </>

        );

    }
}

