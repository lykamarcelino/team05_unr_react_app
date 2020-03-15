import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

const TopNav = () => {
    return(
        <Navbar className="justify-content-end" bg="dark" variant="dark">
            <Nav className="justify-content-right" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/help">Help</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/settings">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/user">User</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default TopNav;
