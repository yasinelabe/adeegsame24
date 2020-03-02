import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import auth from '../auth/auth'
import axios from 'axios'
import API_URL from '../../config/config'

const Dashboard = (props) => {

    const handleLogout = (e) => {
        return auth.logout(() => {props.history.push('/login')});
	}
	
	useEffect(()=>{
		axios({
            method: 'post',
            url: API_URL+'/is_token_valid',
            headers: { 'content-type': 'application/json' },
            data: { token: localStorage.getItem('token') }
        })
            .then((res) => {
                if(res.data.valid){
					
				}
				else{
					auth.logout(()=>{
						props.history.push('/login')
					})
				}
            })
            .catch((err) => {
                console.log(err)
            });
	},[])
	return (
		<div>
			<ul>
				{/* <li>
					<Link to="/drivers">Drivers</Link>
				</li>
				<li>
					<Link to="/cars">Cars</Link>
				</li>
				<li>
					<Link to="/stores">Stores</Link>
				</li>
				<li>
					<Link to="/customers">Customers</Link>
				</li> */}
				<li>
					<Link to="/products">Products</Link>
				</li>
			</ul>
            <br></br>
            <button onClick={() => {handleLogout()}}>Logout</button>
		</div>
	);
};

export default Dashboard;
