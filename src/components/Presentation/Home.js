import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import auth from '../auth/auth';

export default  function Home() {
	const where = auth.isAuthenticated() ?  <Redirect to="/dashboard" /> : 
		<div>
			<ul>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</div>
	

	return(
		where
	)
        
}
