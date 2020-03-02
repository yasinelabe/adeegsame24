import React, { useEffect, useState } from 'react';
import { RootContext } from '../../context/RootContext';
import API_URL from '../../config/config';
import axios from 'axios';
import Quantities from './Lists/Quantities';

export default function Checkout(props) {
	const [ ordered, setOrdered ] = useState([]);
	let context = React.useContext(RootContext);
	let cart = context.getCart();
	// cart.push({token: localStorage.getItem('token')});

	useEffect(() => {
		// console.log(JSON.stringify(cart));
		axios({
			method: 'post',
			url: API_URL + '/fetch_cart_products',
			//'Authorization': 'Bearer '+localStorage.getItem('token')
			headers: { 'content-type': 'application/json' },
			data: JSON.stringify(cart)
		})
			.then((res) => {
				let data = res.data;
				setOrdered(data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
    }, []);
    
    const handleDalab = () => {
        const order =  context.getOrder();
        axios({
			method: 'post',
			url: API_URL + '/create_order',
			//'Authorization': 'Bearer '+localStorage.getItem('token')
			headers: { 'content-type': 'application/json' },
			data: JSON.stringify(order)
		})
			.then((res) => {
				let data = res.data;
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
    }

	
	const lists = ordered.map((item, i) => {
		return (
			<div key={item.pk_product_id}>
				<h1>{item.product_name}</h1>
				<Quantities quantity={item.quantity} />
				{context.getOrder().length > 0 ? <button className="checkout" onClick={() => {
                    handleDalab();
                }}>Dalbo</button> : null}
			</div>
		);
	});

	return lists;
}
