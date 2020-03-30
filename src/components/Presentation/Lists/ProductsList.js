import React, { useState } from 'react';
import { RootContext } from '../../../context/RootContext';
const ProductsList = (props) => {
	let context = React.useContext(RootContext);
	
	const showPopup = (quantities, pid,productname) => {
		if (context.getCart().length >= 1) {
			context.getCart().map((item) => {
				if (item.pid === pid) {
					console.log('already exists we should take it out');
					context.setPopup(false);
					context.removeCart(pid);
				} else {
					console.log('not exists first time added to the wallet carft');
					context.setQuantities(quantities);
					context.setSelected([pid,productname]);
					context.setPopup(true);
				}
			});
		} else {
			console.log('first request >= 1');
			context.setQuantities(quantities);
			context.setSelected([pid,productname]);
			context.setPopup(true);
		}

		console.log(context.getCart());
	};
	
	let productsList = '';
	if (props.products.length > 0) {
		productsList = props.products.map((product) => {
			let color = 'red';

			if(context.getCart().length >= 1){

				context.getCart().map((item) => {
					if(item.pid === product.pk_product_id){
						 color = 'green';
					}
				});
			}

			return (
				<div className="item" key={product.pk_product_id}>
					<div className="item_image" style={{ backgroundImage: `url(${product.api_url})` }}>
						{/* <img src="./images/basal.jpg"> */}
					</div>
					<div className="item_content">
						<h5 className="title">{product.product_name}</h5>
						<div className="item_content_icons">
							{/* <span>
							<i className="fa fa-stack-overflow" />
						</span>{' '} */}

							<span>
								<i className="fa fa-money" />
							</span>
							{product.price === null ? ' ' : ' 1' + product.quantity + ' waa  SLSH' + product.price}
						</div>
					</div>
					<span className="leading">
						<i
							className="fa fa-shopping-cart"
							onClick={() => {
								showPopup(product.quantities, product.pk_product_id,product.product_name);
							}}
							style={{ color: color }}
						/>
					</span>
				</div>
			);
		});
	} else {
		productsList = (
			<div className="item" key="1">
				<p style={{ fontSize: '12px', color: 'red' }}>Majirto alaab diwan gashan qaybtan</p>
			</div>
		);
	}
	return productsList;
};

export default ProductsList;
