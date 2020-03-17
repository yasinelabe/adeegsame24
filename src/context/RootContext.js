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
			checkout: false
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

					addOrder: (item) => {
						const m = [ ...this.state.ordered, item ];
						// console.log(this.state.cart.includes(product));
						// console.log(cart)
						if (this.state.ordered.includes(item) === false) {
							this.setState({
								ordered: m
							});

							// console.log(this.state.cart);
						}
					},
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
					getCart: () => {
						return this.state.cart;
					},
					getOrder: () => {
						return this.state.ordered;
					}
				}}
			>
				{this.props.children}
			</RootContext.Provider>
		);
	}
}

export default RootProvider;
