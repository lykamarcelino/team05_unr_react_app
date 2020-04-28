/*
    Used to retrieve information from the QuickBooks API and the backend
    Retrieves tables from Sales, Invoices, and Estimates components
    @Notes: Lyka Marcelino, 04/09/2020
 */

import React from 'react';
import Sales from "../components/Sales";
import Invoices from "../components/Invoices";
import Estimates from "../components/Estimates";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Button} from "react-bootstrap";

const dataRoute = [
    { path: '/sales',
        main: () =>  <Sales/>
    },
    { path: '/invoices',
        main: () => <Invoices/>
    },
    {
        path: '/estimates',
        main: () => <Estimates/>
    }
]

export const QBData = (props) => (
            <>
            <div style={{marginLeft: '170px',marginTop: '0px',fontSize: '2rem', fontWeight: 'bold'}}>View your QuickBooks Data</div>
            <Router>
            <div style={{marginLeft: '135px', marginTop:'10px'}}>
                    <ul style={{listStyleType: 'none', display:'inline'}}>
                        <Link to="/sales" style={{paddingRight: '10px'}}>
                            <Button variant="outline-secondary">Sales</Button>{' '}
                        </Link>
                        <Link to="/invoices" style={{paddingRight: '10px'}}>
                            <Button variant="outline-secondary">Invoices</Button>{' '}
                        </Link>
                        <Link to="/estimates">
                            <Button variant="outline-secondary">Estimates</Button>{' '}
                        </Link>
                    </ul>
                <div>
                    {dataRoute.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>
            </div>
            </Router>

            </>
)

