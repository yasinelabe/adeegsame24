import React from 'react';

import Categories from '../Categories';
import Nav from './Nav'
export default function GridContainer(props) {

    
	 
   
	return (
		<div className="grid_container">
			<div id="shadow" />
			<Nav/>
			<section id="categories">
				<div className="container">
					<div className="category_image" />
					<div className="category_image2" />
					<div className="category_image3" />
				</div>
				<h3 id="c_image_caption">Fruits</h3>
			</section>
			<section id="content">
				<Categories/>
			</section>
			{/* 
 <button class="float-btn">Eeg</button> */}
		</div>
	);
}
