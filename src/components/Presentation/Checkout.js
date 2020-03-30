import React, { useEffect, useState } from 'react';
import { RootContext } from '../../context/RootContext';
import API_URL from '../../config/config';
import axios from 'axios';
import Quantities from './Lists/Quantities';
import { Redirect } from 'react-router-dom';

export default function Checkout(props) {
	let context = React.useContext(RootContext);
	let cart = context.getCart();
	// console.log(cart);
	let totalprice = 0;

	const handleDalab = () => {
		const order = [context.getCart(),{token:localStorage.getItem('token'),totalprice:totalprice}];
		axios({
			method: 'post',
			url: API_URL + '/create_order',
			//'Authorization': 'Bearer '+localStorage.getItem('token')
			headers: { 'content-type': 'application/json' },
			data: JSON.stringify(order)
		})
			.then((res) => {
				let data = res.data;
				// console.log(data)
				if (data.result !== false) {
					document.querySelector('.notify').style.padding = '10px';
					document.querySelector('.notify').innerHTML = '<p>Dalabkaaga waad gudbisay mahadsanid</p>';
					document.querySelector('.notify').style.height = '5vh';
					document.querySelector('.notify').style.overflow = 'hidden';
					document.querySelector('.notify').style.background = 'green';

					setTimeout(() => {
						document.querySelector('.notify').innerHTML = '';
						document.querySelector('.notify').style.height = '0';
						document.querySelector('.notify').style.padding = '0';
						window.location.reload();
					}, 5000);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const lists = cart.map((item, i) => {
		const cabbir = item.cabbirka.split(',');
		const itemprice = cabbir[0];
		totalprice = totalprice + parseInt(itemprice) * parseInt(item.xaddiga);

		return (
			<section className="products" key={item.pid}>
				<div>
					<ul className="list">
						<li className="list-item">
							<div className="list-item__center">{item.productname}</div>
							<div className="list-item__right">
								<div className="list-item__label">{item.xaddiga + ' ' + cabbir[1]}</div>
							</div>
						</li>
					</ul>
				</div>
				{i === cart.length - 1 ? (
					<React.Fragment>
						<h5>Xisaabta = {'SLSH ' + totalprice}</h5>
						<button
							className="checkout"
							onClick={() => {
								handleDalab();
							}}
						>
							Dalbo
						</button>
					</React.Fragment>
				) : (
					false
				)}
			</section>
		);
	});

	return lists;
}
