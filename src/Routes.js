import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Connected} from './pages/Connected';
import {Oauth} from "./pages/Oauth";

export default () => (
    <BrowserRouter>
    <Switch>
        <Route path='/Connected' component={Connected}/>
        <Route path='/Oauth' component={Oauth}/>

    </Switch>
    </BrowserRouter>
);