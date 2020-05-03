/*
*   Name: Routes.js
*   Used to keep the routes for the Connected and Login pages
*   Date: 05/02/2020
*   Author: Lyka Marcelino
* */

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import {Connected} from "./pages/Connected";

export default () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/connected' component={Connected}/>
    </Switch>
    </BrowserRouter>
);