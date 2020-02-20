import React, {Component, Fragment} from 'react';
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import BuildIcon from '@material-ui/icons/Build';
import CreateIcon from '@material-ui/icons/Create';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logoutClient} from "../../actions/authentication";
import SideDrawer from "./SideDrawer";

class Header extends Component {

    static propTypes = {
        logoutClient: PropTypes.func.isRequired,
        authentication: PropTypes.object.isRequired
    };

    render() {
        const {isAuthenticated, client} = this.props.authentication;

        const authLinks = (
            <Nav>
                <Nav.Link eventKey={2} href="#memes">
                    Profile Settings <BuildIcon/>
                </Nav.Link>
                <li className="nav-item">
                    <Button onClick={this.props.logoutClient} className='nav-link btn-info text-light'>
                        Logout
                    </Button>
                </li>
            </Nav>
        );

        const authLinks_nav = (
            <Nav>
                <Link className="nav-link" to="/address-book"><MenuBookIcon/> Address Book</Link>
                            <Nav.Link href="#editor"><CreateIcon/> Editor</Nav.Link>
                            <NavDropdown title="Drafted Documents" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
            </Nav>
        );

        const guestLinks = (
            <Nav>
                <Nav.Link href="#deets">Get Started</Nav.Link>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </Nav>
        );

        const sidebar_nav = (
          <SideDrawer/>
        );

        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {isAuthenticated ? sidebar_nav : null }
                    <Link to='/'><Navbar.Brand>AddressME</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {isAuthenticated ? authLinks_nav : null}
                        </Nav>
                        <Nav>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    authentication: state.authentication
});

export default connect(mapStateToProps, {logoutClient})(Header);