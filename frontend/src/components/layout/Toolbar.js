import React, {Component, Fragment, useState} from 'react';
import {Button, Nav} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ManageSponsor from "./ManageSponsor";

export class Toolbar extends Component {
    render() {
        return (
            <Fragment>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link href='#manage-sponsors'>Manage Sponsors</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#manage-candidates'>Manage Candidates</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Fragment>
        );
    }
}

export default Toolbar;
