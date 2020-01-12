import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "../components/core/Dashboard";
import { Container } from "react-bootstrap";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
    styles = {
        "font-family": "Roboto"
    };
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <Container>
                        <Dashboard />
                    </Container>
                </Fragment>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
