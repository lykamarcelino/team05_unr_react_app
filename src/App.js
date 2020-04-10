/*
    Main loading page for the React application
    Used to route to the Connected and Login pages
    @Notes: Lyka Marcelino, 04/09/2020
 */

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes';

function App() {
    return(
        <>
            <Routes/>
        </>
    );
}
export default App;