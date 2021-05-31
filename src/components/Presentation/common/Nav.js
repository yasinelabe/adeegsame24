import React,{useState} from 'react';

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
			<h3>{user.fullname}</h3>
			<small>@{user.phone}</small>
		</div>
			<div className="customer_name">
					{user.fullname[0]}
			</div>
			<div className="nav_list">
				<ul className="fa-ul">
					<li>
						<a href="/" style={{textDecoration:'none',color:'black'}}>
							<span className="nav_icons">
								<i className="fa fa-home" />
							</span>Home
						</a>
					</li>
					{/* <li>
						<span className="nav_icons">
							<i className="fa fa-language" />
						</span>Languages
					</li> */}
					<li>
					<a href="/privacy" style={{textDecoration:'none',color:'black'}}>
							<span className="nav_icons">
								<i className="fa fa-lock" />
							</span>Privacy Policy
						</a>
					</li>
					<li>
						<span className="nav_icons">
							<i className="fa fa-question-circle" />
						</span>FAQ
					</li>
					<li>
						<span className="nav_icons">
							<i className="fa fa-star" />
						</span>Rate Us
					</li>
					<li onClick={() => handleLogout()}>
						<span className="nav_icons">
							<i className="fa fa-power-off" />
						</span>Logout
					</li>
				</ul>
			</div>
		</nav>
	);
}
