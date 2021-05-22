import React, { useEffect, useState } from 'react';
import API_URL from '../../config/config';
import Resource from '../Logic/common/Resource';
import TopCategoriesList from './Lists/TopCategoriesList';
import { RootContext } from '../../context/RootContext';

const TopCategories = (props) => {
	let context = React.useContext(RootContext);

	

	const categorieslist = () => {
		return (
			<Resource
				path={API_URL + '/fetch_categories'}
				render={(data) => {
					if (data.loading) return  <div className="loader"></div>;
					if (data.error) return <p>Error while loading categories 😠</p>;
					return <TopCategoriesList categories={data.payload} />;
				}}
			/>
		);
	};

	

	return  categorieslist();
};

export default TopCategories;
