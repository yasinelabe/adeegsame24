import Axios from 'axios'
import React, { useState } from 'react'
import API_URL from '../../config/config'
import Footer from './common/Footer'
import Header from './common/Header'
import Nav from './common/Nav'



export default class Profile extends React.Component {
  state = {
    id: JSON.parse(localStorage.getItem("user"))[0].pk_customer_id,
    fullname: JSON.parse(localStorage.getItem("user"))[0].fullname,
    phone: JSON.parse(localStorage.getItem("user"))[0].phone,
    address: JSON.parse(localStorage.getItem("user"))[0].address,
    response: ''
  };


  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.phone.toString().length < 7) {
      return false;
    }
    const data = this.state;
    delete data.response;
    Axios({
      method: "post",
      url: `${API_URL}/edit_customer`,
      headers: { "content-type": "application/json" },
      data,
    })
      .then((res) => {
        if (res.data.success) {
          this.setState({ response: 'Waa la kaydiyay xogtaada.' })
        } else {
          this.setState({ response: 'Cillad ayaa dhacday.' })
        }
      })
      .catch((err) => {

      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="grid_container">
          <div id="shadow" />
          <Nav />
          <section className="profile_dash">
            <div className="profile_letter">
              {this.state.fullname[0]}
            </div>
          </section>
          <section className="stats">
            <ul>
              <li><h4><i className="fa fa-shopping-bag fs-22"></i> 10</h4></li>
              <li><h4><i className="fa fa-list fs-22"></i> dalab</h4></li>
              <li><h4><i className="fa fa-times fs-22"></i> dalab</h4></li>
              <li><h4><i className="fa fa-check fs-22"></i> dalab</h4></li>
            </ul>
          </section>

          <form className="profile_form" onSubmit={this.handleSubmit} >
            <div className="group">
              <i className="fa fa-user fs-12" /> &nbsp; &nbsp; &nbsp;
          <input
                type="text"
                className="text-input text-input--material"
                placeholder="MAGACA OO BUUXA"
                name="fullname" onChange={this.handleChange} value={this.state.fullname}
                required
              />
            </div>
            <div className="group">
              <i className="fa fa-home fs-12" /> &nbsp; &nbsp; &nbsp;
          <input
                type="text"
                className="text-input text-input--material"
                placeholder="XAAFADDA" onChange={this.handleChange}
                name="address" value={this.state.address}
                required
              />
            </div>
            <div className="group">
              <i className="fa fa-phone fs-12" /> &nbsp; &nbsp; &nbsp;
          <input
                type="number" onChange={this.handleChange}
                className="text-input text-input--material"
                placeholder="TALEEFAN NUMBERKA" value={this.state.phone}
                name="phone"
                required
              />
            </div>

            <div className="group">
              <input type="submit" className="button" value="Kaydi" />
            </div>
            {
              this.state.response != '' ? <div className="group">
                <h5>{this.state.response}</h5>
              </div> : ''
            }
          </form>
          <section>
            <Footer />
          </section>
        </div>
      </div>
    )
  }
}

