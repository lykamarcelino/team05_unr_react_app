import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import Sidebar from '../components/Sidebar';

import {Help} from "./Help";
import {Settings} from "./Settings";
import User from "./User";
import {Home} from './Home';
import {Reports} from './Reports';
import {NewReport} from './NewReport';
import {QBData} from './QBData';

import Logo from "../static/Top_Logo.png";

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
            <div>
                <Router>
                    <Navbar className="justify-content-end" bg="dark" variant="dark" fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif">
                        <div style={{color: 'white', alignContent: 'center', fontFamily: 'sans-serif', marginRight: '400px', fontSize: '1.4em', fontWeight: 'bolded'}}>
                            Sales Forecasting <img src={Logo} alt="Main Logo" hspace="5"/>
                        </div>
                        <Nav className="justify-content-right" fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif">
                            <li fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"><Link to = {'/help'} className="nav-link">Help</Link></li>
                            <li fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"><Link to = {'/settings'} className="nav-link">Settings</Link></li>
                            <li fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"><Link to = {'/user'} className="nav-link">User</Link></li>
                        </Nav>
                    </Navbar>
                    <Sidebar />
                    <Switch>
                        <Route path='/help' component={Help}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/user' component={User}/>
                        <Route path="/home" component={Home} />
                        <Route path="/reports" component={Reports} />
                        <Route path="/newreport" component={NewReport}/>
                        <Route path="/qbdata" component={QBData} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

