/*
*   Name: Connected.js
*   Description: Connected Page for the application, will display the Home page upon entering
*   Used to get Query params and authenticate in the backend
*   Date: 05/02/2020
*   Author: Lyka Marcelino
* */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from "../components/SideBar";

const urlParams = window.location;

//Function used to get the query parameters after logging in
//Used a regex to split the different parameters in the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//Variables used to stare the code, state, and realmID to pass to the backend
var code = getParameterByName('code', urlParams);
var state = getParameterByName('state', urlParams);
var realmId = getParameterByName('realmId', urlParams);

function fetchData()
{
    fetch('http://localhost:8080/oauth', {method: 'GET', headers:{'code' : code, 'state': state, 'realmId': realmId}})
        .then(res => res.json())
        .catch(function (err) {
        return err;
        })
}

fetchData();

//Close the window and load the main page
if(window.opener) {
    window.opener.location.href = '/connected'
    window.close()
}

export class Connected extends React.Component {
    render() {
        return (
            <SideBar/>
        );
    }
}

