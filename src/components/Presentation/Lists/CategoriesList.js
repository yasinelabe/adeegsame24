import React, {useState,useEffect } from 'react';
import Products from '../Products';
import { RootContext } from '../../../context/RootContext';
import logo from '../../../images/sallad.png'

const CategoriesList = (props) => {
	
	let context = React.useContext(RootContext);
	let firstCat = 0;

	useEffect(() => {
		context.setWhoIsOpen(firstCat);
	}, [])

	const handleClick = (id) =>{
		const previd = context.getWhoIsOpen();
		if(previd !== null && previd !== id){
			context.removeWhoIsOpen();
			context.setWhoIsOpen(id)
		} else if(previd === id){
			context.removeWhoIsOpen();
		}
		
		else{
			context.setWhoIsOpen(id)
		}
	}

	const CategoriesList = props.categories.map((category,i) => {
		let angle = (context.getWhoIsOpen() === category.pk_cat_id) ? 'fa fa-angle-down' : 'fa fa-angle-right'
		let shadow = (context.getWhoIsOpen() === category.pk_cat_id) ? '0px 5px 4px -1px rgba(0, 0, 0, 0.137)': 'none';
		if(i === 0){
			firstCat = category.pk_cat_id;
		}
		return (
			<div className="categories_title"   key={category.pk_cat_id}  >
				<div className="categories_items" style={{boxShadow:shadow}} onClick = { () =>handleClick(category.pk_cat_id)}>
					<h5 className="title2">{category.category_name}</h5>
					<span className="leading">
						<i className={angle + " rightangle" }/>
					</span>
				</div>
				<Products category_id={category.pk_cat_id} />
			</div>
		);
	});
	return (

		<React.Fragment>

{CategoriesList}

<div className="below">
	<img src={logo} style={{width:"100%"}}/>
</div>
		</React.Fragment>
		
		);
};

export default CategoriesList;
