import React, { Component } from 'react';
import Axios from 'axios';
import auth from './auth';
import API_URL from '../../config/config';
import {Redirect} from 'react-router-dom'
export class Login extends Component {
	state = {
		username: null,
		password: null
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const data = this.state;
		Axios({
			method: 'post',
			url: `${API_URL}/customer_login`,
			headers: { 'content-type': 'application/json' },
			data
		})
			.then((res) => {
				if (res.data.valid) {
					localStorage.setItem('token', res.data.token);
					auth.login(() => {
						this.props.history.push('/dashboard');
					});
				} else {
					console.log(res.data,'invalid login');
				}
			})
			.catch((err) => {
				console.log(err,'Invalid Login');
			});
	};

	render() {
		const where = auth.isAuthenticated() ? (
			<Redirect to="/dashboard" />
		) : (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="number" name="phone" onChange={this.handleChange} />
					<input type="text" name="password" onChange={this.handleChange} />
					<input type="submit" value="Login" />
				</form>
			</div>
		);

		return where;
	}
}

export default Login;
