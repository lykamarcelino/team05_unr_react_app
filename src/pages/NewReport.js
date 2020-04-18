import React from 'react';
import {Button} from 'react-bootstrap';
import GeneralForm from "../components/graphForms/GeneralForm";
import ItemFetchForm from "../components/graphForms/ItemFetchForm";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CustomerFetchForm from "../components/graphForms/CustomerFetchForm";

const dataRoute = [
    { path: '/graphForm',
        main: () =>  <GeneralForm/>
    },
    { path: '/itemForm',
        main: () => <ItemFetchForm/>
    },
    {
        path: '/customerForm',
        main: () => <CustomerFetchForm/>
    }
]

export const NewReport = (props) => (
    <>
        <div style={{marginLeft: '170px',marginTop: '0px',fontSize: '2rem', fontWeight: 'bold'}}>Generate</div>
        <Router>
            <div style={{marginLeft: '135px', marginTop:'10px'}}>
                <ul style={{listStyleType: 'none', display:'inline'}}>
                    <Link to="/graphForm" style={{marginRight: '10px'}}>
                        <Button variant="outline-secondary">General Sales</Button>{' '}
                    </Link>
                    <Link to="/itemForm" style={{marginRight: '10px'}}>
                        <Button variant="outline-secondary">Item Quantity Sales</Button>{' '}
                    </Link>
                    <Link to="/customerForm">
                        <Button variant="outline-secondary">Customer Purchases</Button>{' '}
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