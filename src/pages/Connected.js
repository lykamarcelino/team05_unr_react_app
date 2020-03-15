import React from 'react';

import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './Home';
import {Predictions} from './Predictions';
import {NoMatch} from './NoMatch';
import Reports from './Reports';

//Need to change paths in routes to the changes made in the sidebar
//Routes are not updated

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
                        path="/reports" component={Reports}/>
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </React.Fragment>
    </>
)
