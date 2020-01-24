import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {Container} from "react-bootstrap";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "../components/core/Dashboard";
import Alerts from './layout/Alerts';
import Login from "./clients/Login";
import Register from "./clients/Register";


import {Provider} from "react-redux";
import store from "../store";


//Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {
    styles = {
        "font-family": "Roboto"
    };

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions} >
                    <Router>
                        <Fragment>
                            <Header/>
                            <Alerts/>
                            <Container>
                                <Switch>
                                    <Route exact path="/" component={Dashboard}/>
                                    <Route exact path="/register" component={Register}/>
                                    <Route exact path="/login" component={Login}/>
                                </Switch>
                            </Container>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
