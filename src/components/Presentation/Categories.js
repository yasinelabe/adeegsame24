import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../auth/auth';
import API_URL from '../../config/config';
import Resource from '../Logic/common/Resource';
import CategoriesList from './Lists/CategoriesList';
import Checkout from './Checkout';
import { RootContext } from '../../context/RootContext';


const Categories = (props) => {
	let context = React.useContext(RootContext);
	
	useEffect(() => {
		axios({
			method: 'post',
			url: API_URL + '/is_token_valid',
			headers: { 'content-type': 'application/json' },
			data: { token: localStorage.getItem('token') }
		})
			.then((res) => {
				if (res.data.valid) {
				} else {
					auth.logout(() => {
						props.history.push('/login');
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const categorieslist = () => {
		return (
			
				<Resource
					path={API_URL + '/fetch_categories'}
					render={(data) => {
						if (data.loading) return <p>Loading Orders</p>;
						if (data.error) return <p>Error while loading orders 😠</p>;
						return <CategoriesList categories={data.payload} />;
					}}
				/>
			
			
		);
	};

	const loadCheckOut = () => {
		return (
			<div>
				<Resource
					render={() => {
						return <Checkout />;
					}}
				/>
			</div>
		);
	};



	return context.getCheckOut() ? loadCheckOut() : categorieslist();
};

export default Categories;
