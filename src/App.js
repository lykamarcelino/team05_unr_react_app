import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes';
import {Connected} from './pages/Connected';
//import Login from './pages/Login';


function App() {
    return(
        <>
            <Routes/>
            <Connected/>
        </>
    );
}
export default App;