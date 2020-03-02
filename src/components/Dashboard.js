import React, { Component } from 'react';
import API_URL from '../config/config';
import { RootContext } from '../context/RootContext';
class Dashboard extends Component {
	static contextType = RootContext;

	handleSubmit = (e) => {

		this.context.addDriver({ name: 'noah', number: '34ad', id: 1, token: localStorage.getItem('token') }, `${API_URL}/create_driver`);
	};
	handleDelete = (e) => {
		this.context.deleteValue(['drivers'], 1, `${API_URL}/delete_driver`);
	};
	render() {
		return (
			<div>
				<button onClick={this.handleSubmit}>ADd Value</button>
				<button onClick={this.handleDelete}>Delete VAlue</button>
			</div>
		);
	}
}

export default Dashboard;
