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
		document.querySelector('body').style.overflow = 'auto';
	}, []);

	const categorieslist = () => {
		return (
			<Resource
				path={API_URL + '/fetch_categories'}
				render={(data) => {
					if (data.loading) return <div className="loader"></div>;
					if (data.error) return <p>Error while loading categories 😠</p>;
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
				<div className="notify"></div>
			</div>
		);
	};

	return context.getCheckOut() ? loadCheckOut() : categorieslist();
	// return  categorieslist();
};

export default Categories;
