/* eslint-disable no-eval */
import React, { Component, createContext } from 'react';
import axios from 'axios';
export const RootContext = createContext();

class RootProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			categories: [],
			messages: [],
			cart: [],
			ordered: [{token:localStorage.getItem('token')}],
			whoisopen: null,
			checkout: false,
			content: null,
			quantities: [],
			popup: false,
			selected: null,
			dalabaat: []
		};
	}

	render() {
		return (
			<RootContext.Provider
				value={{
					state: this.state,
					addCart: (product) => {
						const m = [ ...this.state.cart, product ];

						if (this.state.cart.includes(product) === false) {
							this.setState({
								cart: m
							});
						} else {
							let macart = this.state.cart.filter((value, i) => {
								return value !== product;
							});
							this.setState({
								cart: macart
							});
						}
					},
					removeCart: (pid) => {
						let macart = this.state.cart.filter((value, i) => {
								return value.pid !== pid;
							});
							this.setState({
								cart: macart
							});
					},
					getCart : () =>{
						return this.state.cart;
					},

					addOrder: (item) => {
						const m = [ ...this.state.ordered, item ];
				
						if (this.state.ordered.includes(item) === false) {
							this.setState({
								ordered: m
							});

						}
					},
					// addDalabaat: (item) => {
					// 	const m = [ ...this.state.dalabaat, item ];
				
					// 	if (this.state.dalabaat.includes(item) === false) {
					// 		this.setState({
					// 			dalabaat: m
					// 		});
					// 	}else{
					// 		let maorder = this.state.dalabaat.filter((value, i) => {
					// 		return value !== item;
					// 	});
					// 	this.setState({
					// 		dalabaat: maorder
					// 	});
					// 	}
					// },
					
					setCheckOut: (v) => {
						this.setState({
							checkout: v
						})
					},
					getCheckOut: () => {
						return this.state.checkout
					},
					setWhoIsOpen: (div) => {
						this.setState({
							whoisopen: div
						})
					},
					getWhoIsOpen: () => {
						return this.state.whoisopen
					},
					removeWhoIsOpen: () => {
						this.setState({
							whoisopen: null
						})
					},
					removeOrder: (item) => {
						let maorder = this.state.ordered.filter((value, i) => {
							return value !== item;
						});
						this.setState({
							ordered: maorder
						});
					},
					getTotalCart: () => {
						return this.state.cart.length;
					},
					getOrder: () => {
						return this.state.ordered;
					},
					getContent: () => {
						return this.state.content;
					},
					setContent: (v) => {
						this.setState({
							content: v
						})
					},
					setQuantities: (q) =>{
						this.setState({
							quantities:q
						})
					},

					getQuantities: () =>{
						return this.state.quantities;
					},
					setPopup: (v) =>{
						this.setState({
							popup: v
						})
					},
					getPopup : () =>{
						return this.state.popup;
					},
					setSelected: (v) =>{
						this.setState({
							selected: v
						})
					},
					getSelected : () =>{
						return this.state.selected;
					}
				}}
			>
				{this.props.children}
			</RootContext.Provider>
		);
	}
}

export default RootProvider;
