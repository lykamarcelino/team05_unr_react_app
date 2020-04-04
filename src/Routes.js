import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import {Connected} from "./pages/Connected";
import {Help} from "./pages/Help";
import {Settings} from "./pages/Settings";
import User from "./pages/User";
import {Home} from "./pages/Home";
import {Reports} from "./pages/Reports";
import {NewReport} from "./pages/NewReport";
import {QBData} from "./pages/QBData";

export default () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/connected' component={Connected}/>
        <Route path='/help' component={Help}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/user' component={User}/>
        <Route path="/home" component={Home} />
        <Route path="/reports" component={Reports} />
        <Route path="/newreport" component={NewReport}/>
        <Route path="/qbdata" component={QBData} />
    </Switch>
    </BrowserRouter>
);