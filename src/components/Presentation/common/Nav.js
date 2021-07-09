import React, { useState } from 'react';

import auth from '../../auth/auth';
export default function Nav(props) {
	const [user, setuser] = useState(JSON.parse(localStorage.getItem("user"))[0])
	const handleLogout = (e) => {
		auth.logout(() => {
			window.location.reload();
		});
	};
	return (
		<nav id="sidenav">
			<div className="hero_image" />
			<div className="user_info">
				<h5>{user.fullname}</h5>
				<small>@{user.phone}</small>
				<div className="customer_name">
					{user.fullname[0]}
				</div>
			</div>

			<div className="nav_list">
				<ul className="fa-ul">
					<li>
						<a href="/" style={{ textDecoration: 'none', color: 'black' }}>
							<span className="nav_icons">
								<i className="fa fa-home" />
							</span>Home
						</a>
					</li>

					<li>
						<a href="/privacy" style={{ textDecoration: 'none', color: 'black' }}>
							<span className="nav_icons">
								<i className="fa fa-lock" />
							</span>Privacy Policy
						</a>
					</li>
					<li>
						<a href="/profile" style={{ textDecoration: 'none', color: 'black' }}>
							<span className="nav_icons">
								<i className="fa fa-user" />
							</span>Profile
						</a>
					</li>
					<li>
						<a target="_blank" href="https://play.google.com/store/apps/details?id=com.adeegsame24.adeegsame24" style={{ textDecoration: 'none', color: 'black' }}>					<span className="nav_icons">
							<i className="fa fa-star" />
						</span>Rate Us
						</a>
					</li>
					<li onClick={() => handleLogout()}>
						<span className="nav_icons">
							<i className="fa fa-power-off" />
						</span>Logout
					</li>
				</ul>
			</div>
		</nav >
	);
}
