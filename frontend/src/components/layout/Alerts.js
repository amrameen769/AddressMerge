import React, {Component, Fragment} from 'react';
import {withAlert} from "react-alert";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error){
            if(error.msg.firstName) alert.error(`First Name: ${error.msg.firstName.join()}`);
            if(error.msg.lastName) alert.error(`Last Name: ${error.msg.lastName.join()}`);
            if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if(error.msg.phoneNo) alert.error(`Phone: ${error.msg.phoneNo.join()}`);
        }

        if(message !== prevProps.message){
            if(message.sponsorDeleted) alert.success(message.sponsorDeleted);
            if(message.sponsorAdded) alert.success(message.sponsorAdded);
        }
    }

    render() {
        return <Fragment/>
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));