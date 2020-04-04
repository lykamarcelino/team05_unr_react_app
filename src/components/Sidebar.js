import React from 'react';
import styled from "styled-components";
import {Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed;   
  margin-top: 60px;  
  height: 100%;
  width: 110px;     
  z-index: 1;      
  top: 0px;      
  background-color: #f2f2f0; 
  overflow-x: hidden;    
  padding-top: 20px;
  text-color: white;
  align-content: center;
  align-text: center;
`;

const StyledNavItem = styled.div`
  margin-right: 5px;
  height: 70px;
  width: 70px; 
  align-content: center;
  text-align: center; 
  text-color: white;
  margin-bottom: 0;   
  width: 1.28em;
  a {
    font-size: 1.2em;
    margin-left: 20px;
    margin-top: 0px;
    color: ${(props) => props.active ? "black" : "black"};
    :hover {
      opacity: 0.7;
      text-decoration: none; 
    }  
  }
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/Home',
                    text: 'Home',
                    css: 'fa fa-home',
                    key: 1
                },
                {
                    path: '/reports',
                    text: 'Reports',
                    css: 'fa fa-folder-o',
                    key: 2
                },
                {
                    path: '/newreport',
                    text: 'Generate',
                    css: 'fa fa-line-chart',
                    key: 3
                },
                {
                    path: '/qbdata',
                    text: 'Account',
                    css: 'fa fa-file-text',
                    key: 4
                },
                {
                    path: '/logout',
                    text: 'Logout',
                    css: 'fa fa-sign-out',
                    key: 5
                },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem path={item.path} text={item.text} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key}/>
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }
    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <br></br>{this.props.text}
                </Link>
            </StyledNavItem>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}