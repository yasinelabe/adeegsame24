import React, { useState } from 'react';
import API_URL from '../../../config/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootContext } from '../../../context/RootContext';

export default function Header(props) {
	let context = React.useContext(RootContext);
	let cart = context.getCart();
	const setCheckOut = (v) => {
    context.setCheckOut(v)
  }
	return (
		<header id="topheader">
			<div className="container">
				<div className="left-head">
					<a href="#" id="bar" className="bar">
						<i className="fa fa-bars" id="nav-bar" />
					</a>
					<a href="#" id="return" className="return">
						<i className="fa fa-arrow-left" id="nav-bar" />
					</a>
					<span id="sitename">Adeegside</span>
				</div>
				<div className="center-head">
					<input type="text" id="searchinput" placeholder="Enter Product Name" />
				</div>
				<div className="right-head">
					<a href="#" id="searchbtn">
						<i className="fa fa-search" />
					</a>
					{/* <a href="#"><i class="fa fa-plus"></i></a> */}
					{cart.length > 0 ? (
						<a
							href="#"
							id="cart"
							onClick={() => {
								setCheckOut(true);
							}}
						>
							<i className="fa fa-shopping-cart fa-2x" />
							<span className="counter">{context.getTotalCart()}</span>
						</a>
					) : (
						<a href="#" id="cart">
							<i className="fa fa-shopping-cart fa-2x" />
							<span className="counter">{context.getTotalCart()}</span>
						</a>
					)}
				</div>
			</div>
		</header>
	);

	
}
