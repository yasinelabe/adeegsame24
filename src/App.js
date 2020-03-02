import React,{useEffect,useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faBars } from '@fortawesome/free-solid-svg-icons'

import ProtectedRoute from './components/auth/protected.route';
import { Route, Switch } from 'react-router-dom';
import RootProvider, { RootContext } from './context/RootContext';
import Products from './components/Presentation/Products';
import Login from './components/auth/Login';
import Dashboard from './components/Presentation/Dashboard';
import Home from './components/Presentation/Home';
import Header from './components/Presentation/common/Header';
import Nav from './components/Presentation/common/Nav';
import Checkout from './components/Presentation/Checkout';



function App() {
	// useEffect(() => {
	// 	const script = document.createElement("script");
	
	// 	script.src = "./scripts.js";
	// 	script.async = true;
	
	// 	document.body.appendChild(script);
		
	// }, [])
	 
	library.add(fab, faBars)

	

	
	
	return (
		<RootProvider>
			<div className="App">
			<Route component ={Header} />
			{/* <Route component ={Nav}/> */}
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<ProtectedRoute exact path="/checkout" component={Checkout}  />
					<ProtectedRoute exact path="/dashboard" component={Dashboard} />
					<ProtectedRoute exact path="/products" component={Products} />
					<Route path="*" render={()=> "404 page not found"}/>
				</Switch>
			</div>
		</RootProvider>
	);
}
export default App;
