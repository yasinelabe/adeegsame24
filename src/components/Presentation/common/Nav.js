import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../../auth/auth';
export default function Nav(props) {

	const handleLogout = (e) => {
        return auth.logout(() => {
         return <Redirect to='/login'/>
        });
      };
	return (
		<nav id="sidenav">
			<div className="hero_image" />
			<div className="nav_list">
				<ul className="fa-ul">
					<li>
						<span className="nav_icons">
							<i className="fa fa-home" />
						</span>Home
					</li>
					<li>
						<span className="nav_icons">
							<i className="fa fa-language" />
						</span>Languages
					</li>
					<li>
						<span className="nav_icons">
							<i className="fa fa-lock" />
						</span>Privacy Policy
					</li>
					<li>
						<span className="nav_icons">
							<i className="fa fa-file" />
						</span>Terms &amp; Conditions
					</li>
					<li>
						<span className="nav_icons">
							<i className="fa fa-star" />
						</span>Rate Us
					</li>
					<li onClick = {() => handleLogout()}>
						<span className="nav_icons">
							<i className="fa fa-power-off" />
						</span>Logout
					</li>
				</ul>
			</div>
		</nav>
	);
}
