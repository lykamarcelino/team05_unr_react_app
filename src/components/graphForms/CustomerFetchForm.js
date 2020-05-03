/*
*   Name: CustomerFetchForm.js
*   Description: This file makes a fetch request to the backend and retrieves a list of the
*   active customers of the User. It then passes this list to the customer form for selection.
*   Date: 04/29/2020
*   Author: Liliana Pacheco
* */
import React from "react";
import CustomerForm from "./CustomerForm";

export default class CustomerFetchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            fetchDone: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/getCustomerList', {method: 'GET',})
            .then(res => res.json())
            .then(jsonResponse => {
                this.setState({
                    customerList: jsonResponse,
                })
                console.log("fetch was done")
                console.log(this.state)
                this.setState({fetchDone: true})
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }

    render(){
        return(
            <div>
                { this.state.fetchDone && <CustomerForm customerList = {this.state.customerList}/>}
            </div>)
    }
}