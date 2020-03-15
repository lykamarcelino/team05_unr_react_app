import React from 'react';

import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './Home';
import {Predictions} from './Predictions';
import {NoMatch} from './NoMatch';
import Reports from "./Reports";

export const Connected = () => (
    <>
        <TopNav/>
        <React.Fragment>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/predictions" component={Predictions} />
                    <Route
                        path="/reports" component={Reports}
                    />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </React.Fragment>
    </>
)
