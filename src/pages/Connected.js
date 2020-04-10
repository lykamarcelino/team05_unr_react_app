/*
    Connected Page for the application, will display the Home page upon entering
    Used to get Query params and authenticate in the backend
    @Notes: Lyka Marcelino, 04/04/2020
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from "../components/SideBar";

const urlParams = window.location;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

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

