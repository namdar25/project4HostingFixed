import React, { Component } from 'react';

export class Auth extends Component {
	constructor(props) {
		super(props)
		    this.state = {
            email: '',
            password: '',
            username: ''
		};
	}

	// Add a method to handle changes to any input element
    handleChange(event) {
		let value = event.target.value;
		let field = event.target.name;
		let change = {};
		change[field] = value;
		this.setState(change);
    }

	render() {
		return(
			<div className="container">
				<div className="form-group">
                    <label>Email:</label>
                    <input className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={(event) => { this.handleChange(event) }}
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={(event) => { this.handleChange(event) }}
                    />
                </div>

                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={(event) => { this.handleChange(event) }}
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mr-2" onClick={() => this.props.handleSignUp(this.state.email, this.state.password, this.state.username)}>
                        Sign Up
                     </button>
                    <button className="btn btn-success mr-2" onClick={() => this.props.handleSignIn(this.state.email, this.state.password)}>
                        Sign In
                    </button>

                </div></div>
		)
	}
}