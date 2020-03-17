import React, {useState } from 'react';
import Products from '../Products';
import { RootContext } from '../../../context/RootContext';


const CategoriesList = (props) => {
	
	let context = React.useContext(RootContext);

	const handleClick = (id) =>{
	
		if(context.getWhoIsOpen() !== null){
			context.removeWhoIsOpen();
		}else{
			context.setWhoIsOpen(id)
		}
	}

	const CategoriesList = props.categories.map((category) => {
		return (
			<div className="categories_title"  key={category.pk_cat_id} >
				<div className="categories_items" onClick = { () =>handleClick(category.pk_cat_id)}>
					<h5 className="title">{category.category_name}</h5>
					<span className="leading">
						<i className="fa fa-angle-right rightangle" />
					</span>
				</div>
				<Products category_id={category.pk_cat_id} />
			</div>
		);
	});
	return CategoriesList;
};

export default CategoriesList;
