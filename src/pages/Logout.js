/*
*   Name: Logout.js
*   Is used to logout and redirect to the login page
*    Hits the logout endpoint in the backend to revoke the client
*   Date: 05/02/2020
*   Author: Lyka Marcelino
* */

import React from 'react';

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/logout', {method: 'GET'})
            .then(res => res.json())
            .then(items=>this.setState({items}))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }
    render() {
        function logout() {
            var x = window.location.href;
            if(x){
                window.location.href = "/"
            }
        }

        logout();

        return (
            null
        );
    }
}

