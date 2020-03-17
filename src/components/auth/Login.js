import React, { Component } from 'react';
import Axios from 'axios';
import auth from './auth';
import API_URL from '../../config/config';
import { Redirect } from 'react-router-dom';
import sallad from '../../images/sallad.png';
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
					console.log(res.data, 'invalid login');
				}
			})
			.catch((err) => {
				console.log(err, 'Invalid Login');
			});
	};

	render() {
		const where = auth.isAuthenticated() ? (
			<Redirect to="/dashboard" />
		) : (
			<div>
				<div className="preloader">
					<img src={sallad} alt="loading" />
				</div>
				<form className="form" onSubmit={this.handleSubmit}>
					<div>
						<i className="fa fa-phone" /> &nbsp; &nbsp; &nbsp;<input
							type="number"
							name="phone"
							className="text-input text-input--material"
							placeholder="TALEEFAN NUMBERKA"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<i className="fa fa-lock" /> &nbsp; &nbsp; &nbsp;<input
							type="password"
							className="text-input text-input--material"
							placeholder="FURE SIREEDKA"
							name="password"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<input type="submit" className="button" defaultValue="BOOQO" />
					</div>
				</form>
			</div>
		);

		return where;
	}
}

export default Login;
