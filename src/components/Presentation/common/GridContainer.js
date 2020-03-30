import React, { useEffect } from 'react';

import Categories from '../Categories';
import Nav from './Nav'
import TopCategories from '../TopCategories';
import { RootContext } from '../../../context/RootContext';
// import { RootContext } from '../../../context/RootContext';
export default function GridContainer(props) {

	let context = React.useContext(RootContext);
	
	useEffect(() => {
		let contnt = document.getElementById('content');
		context.setContent(contnt.childNodes)
	}, [])
	
	return (
		<div className="grid_container">
			<div id="shadow" />
			<Nav/>
			
			<section id="categories">
				{/* <div className="container">
				<TopCategories/>
				
				</div>
				 */}
			</section>
			<section id="content">
				<Categories/>
			</section>
			{/* 
 <button class="float-btn">Eeg</button> */}
		</div>
	);
}
