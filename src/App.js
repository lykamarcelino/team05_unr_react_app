import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pages/Connected.js';
import {Connected} from "./pages/Connected";
//import Login from './pages/Login';

function App() {
    return(
            //The Login page will be the initial display, after clicking the button and logging in the connected page should be displayed
           //<Login/>
           //  //Connected is being returned to test connected
           <Connected/>
    );
}
export default App;