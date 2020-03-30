import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import auth from '../auth/auth';
import sallad from '../../images/sallad.png';

export default function Home() {
	useEffect(() => {
		if (!auth.isAuthenticated()) {
			setTimeout(() => {
				document.querySelector('.preloader').style.opacity = '0';
				document.querySelector('.preloader').style.height = '0';
				document.querySelector('.preloader').style.overflow = 'hidden';
				document.querySelector('.ul').style.display = 'flex';
				document.querySelector('body').style.overflow = 'hidden';
			}, 5000);
		}
	}, []);

	const where = auth.isAuthenticated() ? (
		<Redirect to="/dashboard" />
	) : (
		<div className="home_container">
			<div className="preloader">
				<img src={sallad} alt="loading" />
			</div>
			<ul className="ul">
				<li>
					<Link to="/login">Gal Account-kaaga</Link>
				</li>
				<li>
					<Link to="/signup">Is diwaan gali</Link>
				</li>
			</ul>
		</div>
	);

	return where;
}
