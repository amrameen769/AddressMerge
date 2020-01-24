import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({component: Component, authentication, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (authentication.isLoading) {
                    return <h2>Loading...</h2>
                } else if (!authentication.isAuthenticated) {
                    return <Redirect to={"/login"} />
                } else {
                    return <Component {...props}/>
                }
            }}
        />
    )
};

const mapStateToProps = state => ({
    authentication: state.authentication
});

export default connect(mapStateToProps)(PrivateRoute);