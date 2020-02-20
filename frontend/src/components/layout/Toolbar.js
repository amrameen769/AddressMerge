import React, {Component, Fragment} from 'react';
import {Button, Nav} from "react-bootstrap";

export class Toolbar extends Component {
    render() {
        return (
            <Fragment>
                <Nav variant="tabs" defaultActiveKey="">
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