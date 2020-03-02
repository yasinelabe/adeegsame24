import React, { Component } from 'react'
import { RootContext } from '../../../context/RootContext';
import API_URL from '../../../config/config';


export default class DriverForm extends Component {

    constructor(props){
        super(props)
        
    }


    state = {
        fullname: '',
        phone: '',
        username: '',
        password: '',
        salary: '',
        address: '',
        token: localStorage.getItem('token')
    }
    static contextType = RootContext;

    addDriver = (e) => {
        e.preventDefault();
        this.context.addValue(['drivers'],{...this.state},`${API_URL}/create_driver`);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addDriver}>
                    <input type="text" onChange={this.handleChange} placeholder="fullname" id="fullname"/>
                    <input type="text" onChange={this.handleChange} placeholder="phone" id="phone"/>
                    <input type="text" onChange={this.handleChange} placeholder="username" id="username"/>
                    <input type="text" onChange={this.handleChange} placeholder="password" id="password"/>
                    <input type="number" onChange={this.handleChange} placeholder="salary" id="salary"/>
                    <input type="text" onChange={this.handleChange} placeholder="address" id="address"/>
                    <button onClick={this.addDriver}>Create driver</button>
                </form>
            </div>
        )
    }
}
