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
		let btn = false;
		console.log(products);

		if (products.includes(product.pk_product_id)) {
			color = 'red';
			text = 'Dhig';
		} else {
			color = 'green';
			text = 'Qaado';
		}

		return (
			<div key={product.pk_product_id} className="product_car">
				<div className="card_image_holder">
					{/* <img src={product.api_url} className="card_image" alt="productimage"/> */}
				</div>
				<div className="productInfo">
					<h3>{product.product_name}</h3>
				</div>

				<div className="card_footer">
					<button
						onClick={() => {
							addToCart(product.pk_product_id);
						}}
						style={{ background: color }}
					>
						{text}
					</button>
				</div>
			</div>
		);
	});

	return productsList;
};

export default ProductsList;
