//Login will be the initial page that is displayed, after logging in the user should be taken to the actual page
//The "Connect to QuickBooks" button is not linked to anything
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Connected} from './Connected';
import {Button} from "react-bootstrap";
import Logo from '../src/static/Cloud_Logo.png';
import Background from './static/Default_Dark.jpg';
import './App.css';

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
        this.state= {
            showComponent: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick(){
        this.setState({showComponent: true, });
    }

    render() {
        return (
            <div style={backgroundStyle}>
                <h3>Sales Forecasting
                    <img src={Logo} alt="Main Logo" hspace="20"/>
                </h3>
                <div style={roundedblock}>
                    <Button variant="light" className="justify-content-center" onClick={this._onButtonClick} > Log in to QuickBooks</Button>
                    {
                        this.state.showComponent ?
                            <Connected /> :
                            null
                    }
                </div>
            </div>
        );
    }
}
