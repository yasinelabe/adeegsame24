import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../auth/auth';
import API_URL from '../../config/config';
import Resource from '../Logic/common/Resource';
import ProductsList from './Lists/ProductsList';
import { RootContext } from '../../context/RootContext';

const Products = (props) => {
	let context = React.useContext(RootContext);
	


	const productslist = () => {
		let className =  (context.getWhoIsOpen() === props.category_id) ? ' ' : 'items';
		
		// console.log(className)
		return (
			<div className={'content_categories ' + className }>
				<Resource
					path={API_URL + '/fetch_products'}
					data = {props.category_id}
					render={(data) => {
						// console.log(data);
						if (data.loading) return <div className="loader"></div>;
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
