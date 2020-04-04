import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Logo from "../static/Top_Logo.png";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Sidebar from "./Sidebar";
import {Help} from "../pages/Help";
import {Settings} from "../pages/Settings";
import User from "../pages/User";
import {Home} from "../pages/Home";
import {Reports} from "../pages/Reports";
import {NewReport} from "../pages/NewReport";
import {QBData} from "../pages/QBData";

export const TopNav = (props) => (
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
)
