import store from "../../store";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import React, {Component, Fragment} from "react";
import Header from "../layout/Header";
import Alerts from "../layout/Alerts";
import {Container} from "react-bootstrap";
import PrivateRoute from "../misc/PrivateRoute";
import AddressBook from "./AddressBook";
import Register from "../clients/Register";
import Login from "../clients/Login";
import {loadClient} from "../../actions/authentication";
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {Provider} from "react-redux";
import {HomeMe} from "../layout/HomeMe";
import ManageSponsor from "../layout/ManageSponsor";

//Alert Options
const alertOptions = {
    timeout: 3000,
    position: "bottom center"
};

export class Merger extends Component {

    componentDidMount() {
        store.dispatch(loadClient());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header/>
                            <Alerts/>
                            <Container>
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        component={HomeMe}
                                        />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        component={Login}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/address-book"
                                        component={AddressBook}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/manage-sponsors"
                                        component={ManageSponsor}
                                    />
                                </Switch>
                            </Container>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

export default Merger;