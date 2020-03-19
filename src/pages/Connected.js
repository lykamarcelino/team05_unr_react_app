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


export const Connected = () => (
    <>
            <Router>
                <Navbar className="justify-content-end" bg="dark" variant="dark">
                    <Nav className="justify-content-right">
                        <li><Link to = {'/help'} className="nav-link">Help</Link></li>
                        <li><Link to = {'/settings'} className="nav-link">Settings</Link></li>
                        <li><Link to = {'/user'} className="nav-link">User</Link></li>
                    </Nav>
                </Navbar>
                <Sidebar />
                <Switch>
                    <Route path='/help' component={Help}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/user' component={User}/>
                    <Route exact path="/" component={Home} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/newreport" component={NewReport}/>
                    <Route path="/qbdata" component={QBData} />
                </Switch>
            </Router>
    </>
)
