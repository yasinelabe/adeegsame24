import React, {useState,useEffect } from 'react';
import Products from '../Products';
import { RootContext } from '../../../context/RootContext';


const TopCategoriesList = (props) => {
	
	let context = React.useContext(RootContext);
	// let firstCat = 0;

	// useEffect(() => {
	// 	context.setWhoIsOpen(firstCat);
	// }, [])

	// const handleClick = (id) =>{
	// 	const previd = context.getWhoIsOpen();
	// 	if(previd !== null && previd !== id){
	// 		context.removeWhoIsOpen();
	// 		context.setWhoIsOpen(id)
	// 	} else if(previd === id){
	// 		context.removeWhoIsOpen();
	// 	}
		
	// 	else{
	// 		context.setWhoIsOpen(id)
	// 	}
	// }

	const topCategoriesList = props.categories.map((category,i) => {
		
		return (

            <div className="category_image" style={{backgroundImage:`url(${category.image_url})`}}>

            <h3 id="c_image_caption">{category.category_name}</h3>

            </div>
		);
	});
	return topCategoriesList;
};

export default TopCategoriesList;
