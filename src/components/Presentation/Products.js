import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../auth/auth';
import API_URL from '../../config/config';
import Resource from '../Logic/common/Resource';
import ProductsList from './Lists/ProductsList';
import Checkout from './Checkout';
import { RootContext } from '../../context/RootContext';

const Products = (props) => {
	let context = React.useContext(RootContext);
	let cart = context.getCart();
	const [ checkout, setCheckOut ] = useState(false);
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
		return (
			<div>
				<Resource
					path={API_URL + '/fetch_products'}
					render={(data) => {
						if (data.loading) return <p>Loading Orders</p>;
						if (data.error) return <p>Error while loading orders 😠</p>;
						return <ProductsList products={data.payload} />;
					}}
				/>
				{cart.length > 0 ? (
					<button
						className="checkout"
						onClick={() => {
							setCheckOut(true);
						}}
					>
						CheckOut
					</button>
				) : null}
			</div>
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

	return checkout ? loadCheckOut() : productslist();
};

export default Products;
