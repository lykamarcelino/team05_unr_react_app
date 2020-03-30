//Login will be the initial page that is displayed, after logging in the user should be taken to the actual page
//The "Connect to QuickBooks" button is not linked to anything
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Connected} from './Connected';
import Logo from '../../src/static/Cloud_Logo.png';
import Background from '../static/Default_Dark.jpg';
import '../App.css';

const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}

const roundedblock = {
    borderRadius: '50px',
    border: 'white',
    padding: '100px',
    width: '400px',
    height: '300px',
    background: '#F5F5F5',
    display: 'block',
    marginTop: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    //How to center the button ???
    justifyContent: "center",
    alignItems: 'center'
}

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isClicked: false};
    }

    handleClick() {
        this.setState({isClicked: true});
    }

    render() {

        return (
            <Router>
            <div style={backgroundStyle}>
                <h3>Sales Forecasting
                    <img src={Logo} alt="Main Logo" hspace="20"/>
                </h3>
                <div style={roundedblock}>
                    <li><Link to = {'/connected'} className="nav-link">Connected</Link></li>
                </div>
            </div>
                <Switch>
                    <Route path='/connected' component={Connected}/>
                </Switch>
            </Router>
        );
    }
}
