import React, { useState } from 'react';
import { RootContext } from '../../../context/RootContext';
const ProductsList = (props) => {
	let context = React.useContext(RootContext);

	const [ products, setProducts ] = useState([]);

	const addToCart = (product) => {
		context.addCart(product);
		if (!products.includes(product)) {
			setProducts([ ...products, product ]);
		} else {
			setProducts(
				products.filter(function(val, i) {
					return val !== product;
				})
			);
		}
	};

	const productsList = props.products.map((product) => {
		let text = '';
		let color = '';
		
		if (products.includes(product.pk_product_id)) {
			color = 'green';
			text = 'Dhig';
		} else {
			color = 'red';
			text = 'Qaado';
		}

		return (
			<div className="item" key={product.pk_product_id}>
				<div className="item_image" style={{backgroundImage: `url(${product.api_url})`}}>{/* <img src="./images/basal.jpg"> */}</div>
				<div className="item_content">
					<h5 className="title">{product.product_name}</h5>
					<div className="item_content_icons">
						<span>
							<i className="fa fa-stack-overflow" />
						</span>{' '}
						Qauntity
						<span>
							<i className="fa fa-money" />
						</span>{' '}
						Price
					</div>
				</div>
				<span className="leading">
					<i
						className="fa fa-shopping-cart"
						onClick={() => {
							addToCart(product.pk_product_id);
						}}
						style={{ color: color }}
					/>
				</span>
			</div>
		);
	});

	return productsList;
};

export default ProductsList;
