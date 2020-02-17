import React, {Component, Fragment} from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from "react-dom";
import {Merger} from "./core/Merger";
import {HomeMe} from "./layout/HomeMe";

class App extends Component {
    styles = {
        "font-family": "Roboto"
    };

    render() {
        return (
            <Merger />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
