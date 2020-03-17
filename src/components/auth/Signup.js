import React, { Component } from 'react';
import Axios from 'axios';
import auth from './auth';
import API_URL from '../../config/config';
import {Redirect} from 'react-router-dom'
export class Signup extends Component {
	state = {
		fullname: null,
        phone: null,
        address: null,
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
			url: `${API_URL}/create_customer`,
			headers: { 'content-type': 'application/json' },
			data
		})
			.then((res) => {
				if (res.data.success) {
					console.log(res.data)
				} else {
					console.log(res.data,'invalid Signup');
				}
			})
			.catch((err) => {
				console.log(err,'Invalid Signup');
			});
	};

	render() {
		const where = auth.isAuthenticated() ? (
			<Redirect to="/dashboard" />
		) : (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="fullname" placeholder="fullname" onChange={this.handleChange} />
					<input type="text" name="address" placeholder="address"  onChange={this.handleChange} />
					<input type="number" name="phone" placeholder="phone"  onChange={this.handleChange} />
					<input type="password" name="password" placeholder="password"  onChange={this.handleChange} />
					<input type="submit" value="Signup" />
				</form>
			</div>
		);

		return where;
	}
}

export default Signup;
