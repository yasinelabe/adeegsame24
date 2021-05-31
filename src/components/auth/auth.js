import axios from 'axios';
import API_URL from '../../config/config';
class Auth {
	constructor() {
		
		if (localStorage.getItem('token')) {
			// axios({
			// 	method: 'post',
			// 	url: `${API_URL}/is_token_valid`,
			// 	headers: { 'content-type': 'application/json' },
			// 	data: { token: localStorage.getItem('token') }
			// })
			// 	.then((res) => {
			// 		if(res.data.valid === true){
			// 			this.authenticated = true;
			// 		}
			// 		else{
			// 			this.authenticated = false;
			// 		}
					
			// 	})
			// 	.catch((err) => {
			// 		this.authenticated = false;
			// 	});
			this.authenticated = true;
		} else {
			this.authenticated = false;
		}

	}

	login(cb) {
		if (localStorage.getItem('token')) {
			this.authenticated = true;
		}
		cb();
	}

	logout(cb) {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		this.authenticated = false;
		cb();
	}

	 isAuthenticated(){
		return  this.authenticated;
	}
}

export default new Auth();
