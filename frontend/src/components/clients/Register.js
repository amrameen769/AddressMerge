import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Submit");
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {username, email, password, confirm_password} = this.state;

        return (
            < div
                className="col-lg-7">
                < div
                    className="p-5">
                    < div
                        className="text-center">
                        < h4
                            className="text-dark mb-4"> Create
                            an
                            Account
                            ! </h4>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input
                                    className="form-control form-control-user" type="text"
                                    placeholder="UserName"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                />
                            </div>
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
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;