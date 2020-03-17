import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../auth/auth';
import API_URL from '../../config/config';
import Resource from '../Logic/common/Resource';
import ProductsList from './Lists/ProductsList';
import { RootContext } from '../../context/RootContext';

const Products = (props) => {
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

	const productslist = () => {
		let className =  (context.getWhoIsOpen() === props.category_id) ? ' ' : 'items';
		console.log(className)
		return (
			<div className={'content_categories ' + className }>
				<Resource
					path={API_URL + '/fetch_products'}
					data = {props.category_id}
					render={(data) => {
						
						if (data.loading) return <p>Loading products</p>;
						if (data.error) return <p>Error while loading products 😠</p>;
						return <ProductsList products={data.payload} />;
					}}
				/>
				
			</div>
		);
	};

	

	return  productslist();
};

export default Products;
