import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import BuildIcon from '@material-ui/icons/Build';
import CreateIcon from '@material-ui/icons/Create';
import MenuBookIcon from '@material-ui/icons/MenuBook';

class Header extends Component {
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">AddressME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"> <MenuBookIcon/> Address Book</Nav.Link>
                        <Nav.Link href="#editor"><CreateIcon /> Editor</Nav.Link>
                        <NavDropdown title="Drafted Documents" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More details</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Profile Settings <BuildIcon />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;