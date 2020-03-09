import React, {Component} from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
// import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
// import {Merger} from "../core/Merger";

export class HomeMe extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Hello, Welcome to AddressME!</h1>
                    <p>
                        This is a simple CRM Level API Application for Storing and Editing Business Information!
                    </p>
                    <p>
                        <Link to={"/login"} variant="primary">Learn more</Link>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default HomeMe;