import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerClient} from "../../actions/authentication";
import {createMessage} from "../../actions/messagesAction";

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    };

    static propTypes = {
        registerClient: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = e => {
        e.preventDefault();
        const {username, email, password, confirm_password} = this.state;
        if(password !== confirm_password) {
            this.props.createMessage({passwordDoNotMatch: "Passwords do not Match!"});
        } else {
            const newClient = {
                username,
                password,
                email
            };
            this.props.registerClient(newClient);
        }
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>;
        }
        const {username, email, password, confirm_password} = this.state;

        return (
            < div
                className="col-md-6 m-auto">
                < div
                    className="card card-body mt-5">
                    < div
                        className="text-center">
                        < h4
                            className="text-dark mb-4"> Create
                            an
                            Account
                            ! </h4>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control form-control-user" type="text"
                                placeholder="UserName"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-user"
                                   type="email"
                                   placeholder="Email Address" name="email"
                                   onChange={this.onChange}
                                   value={email}
                            />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input
                                    className="form-control form-control-user"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                />
                            </div>
                            <div className="col-sm-6">
                                <input className="form-control form-control-user"
                                       type="password"
                                       placeholder="Repeat Password"
                                       name="confirm_password"
                                       onChange={this.onChange}
                                       value={confirm_password}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block text-white btn-user" type="submit">Register
                            Account
                        </button>
                        <p className="text-center">
                            Already Have an Account?
                            <Link to="/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated
});

export default connect(mapStateToProps, {registerClient, createMessage})(Register);