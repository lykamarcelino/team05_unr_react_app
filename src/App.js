import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Connected.js';
import {Connected} from "./Connected";
// import Login from './Login.js';

function App() {
    return(
            //The Login page will be the initial display, after clicking the button and logging in the connected page should be displayed
           //<Login></Login>
            //Connected is being returned to test connected
            <Connected></Connected>
    );
}
export default App;