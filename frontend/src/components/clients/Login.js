import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Register extends Component {
    state = {
        username: '',
        password: '',
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
                className="col-md-6 m-auto">
                < div
                    className="card card-body mt-5">
                    < div
                        className="text-center">
                        < h4>
                            Login
                        </h4>
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
                            <input
                                className="form-control form-control-user"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <button className="btn btn-primary btn-block text-white btn-user" type="submit">
                            Login
                        </button>
                        <p className="text-center">
                            Don't Have an Account?
                            <Link to="/register">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;