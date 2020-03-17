import React, { Component } from 'react';
import Axios from 'axios'

class Resource extends Component {
    state = {
        loading: false,
        error: false,
        payload: []
    }

   

    componentDidMount(){
        const category_id = this.props.data;
        this.setState({loading:true,error:false});
        Axios({
            method: 'post',
            url: this.props.path,
            headers: { 'content-type': 'application/json' },
            data: { token: localStorage.getItem('token'), category_id:category_id}
        })
            .then((res) => {
                // console.log(res)
                if(res.data.invalid){
                    this.setState({error:true})
                }
               this.setState({
                   payload:res.data,
                   loading:false
               })
            })
            .catch((err) => {
                this.setState({
                    error:true
                })
            });
    }
    render() {
        return this.props.render(this.state)
    }
}


export default Resource