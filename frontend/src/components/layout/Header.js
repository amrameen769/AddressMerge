import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import BuildIcon from '@material-ui/icons/Build';
import CreateIcon from '@material-ui/icons/Create';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logoutClient} from "../../actions/authentication";

class Header extends Component {

    static propTypes = {
        logoutClient: PropTypes.func.isRequired,
        authentication: PropTypes.object.isRequired
    };

    render() {
        const {isAuthenticated, client} = this.props.authentication;

        const authLinks = (
            <Nav>
                <li className="nav-item">
                    <Button onClick={this.props.logoutClient} className='nav-link btn-info text-light'>
                        Logout
                    </Button>
                </li>
            </Nav>
        );

        const guestLinks = (
            <Nav>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </Nav>
        );

        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AddressME</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
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
                        <Nav>
                            <Nav.Link href="#deets">More details</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Profile Settings <BuildIcon/>
                            </Nav.Link>
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