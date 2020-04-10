/*
    SideBar component for the application, routes to the different pages
    @Notes: Lyka Marcelino, 04/04/2020
 */

import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import styled from "styled-components";
import {Home} from  '../pages/Home'
import {Nav, Navbar} from "react-bootstrap";
import Logo from "../static/Top_Logo.png";
import {Help} from "../pages/Help";
import {Settings} from "../pages/Settings";
import User from "../pages/User";
import {Reports} from "../pages/Reports";
import {NewReport} from "../pages/NewReport";
import {QBData} from "../pages/QBData";
import Logout from "../pages/Logout";

var StyledSideNav = styled.div`
  position: absolute;   
  margin-top: 58px;  
  height: 1400px;
  width: 150px;     
  z-index: 1;      
  top: 0px;      
  background-color: #0F2C54; 
  overflow-x: hidden;    
  padding-top: 15px;
  text-color: white;
  align-content: center;
  align-text: center;
`;

const StyledNavItem = styled.div`
  a {
    font-size: 1.2em;
    margin-left: 15px;
    margin-top: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #dcdcdc;
    :hover {
      opacity: 0.7;
      text-decoration: none; 
    }  
  }
`;

const routes = [
    { path: '/connected',
        main: () =>  <Home/>
    },
    { path: '/reports',
        main: () => <Reports/>
    },
    { path: '/generate',
        main: () => <NewReport/>
    },
    { path: '/qbdata',
        main: () => <QBData/>
    },
    { path: '/logout',
        main: () => <Logout/>
    }
]

class SideBar extends React.Component {
    render() {
        return (
            <Router>
                <Navbar className="justify-content-end" bg="dark" variant="dark" fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif">
                    <div style={{color: 'white', alignContent: 'center', fontFamily: 'sans-serif', marginRight: '400px', fontSize: '1.4em', fontWeight: 'bolded'}}>
                        Sales Forecasting <img src={Logo} alt="Main Logo" hspace="5"/>
                    </div>
                    <Nav className="justify-content-right" fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif">
                        <li fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"><Link to = {'/help'} className="nav-link">Help</Link></li>
                        <li fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"><Link to = {'/settings'} className="nav-link">Settings</Link></li>
                        <li fontFamily="Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif"><Link to = {'/user'} className="nav-link">User</Link></li>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path='/help' component={Help}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/user' component={User}/>
                </Switch>

                <div style={{ display: 'flex' }}>
                    <StyledSideNav>
                        <ul style={{ listStyleType: 'none', padding: '5px', color:'black' }}>
                            <StyledNavItem><Link to="/connected"> <i className="fa fa-home"></i> Home </Link></StyledNavItem>
                            <br></br>
                            <StyledNavItem><Link to="/reports"><i className="fa fa-folder-o"></i> Reports</Link></StyledNavItem>
                            <br></br>
                            <StyledNavItem><Link to="/generate"><i className="fa fa-line-chart"></i> Generate</Link></StyledNavItem>
                            <br></br>
                            <StyledNavItem><Link to="/qbdata"> <i className="fa fa-file-text"></i> QB Data</Link></StyledNavItem>
                            <br></br>
                            <StyledNavItem><Link to="/logout"> <i className="fa fa-sign-out"></i> Logout</Link></StyledNavItem>
                        </ul>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                    </StyledSideNav>

                    <div style={{ flex: 1, padding: '10px' }}>
                        {routes.map((route) => (
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
        )
    }
}

export default SideBar