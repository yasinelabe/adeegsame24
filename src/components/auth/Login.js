import React, { Component } from "react";
import Axios from "axios";
import auth from "./auth";
import API_URL from "../../config/config";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  state = {
    username: null,
    password: null,
  };

  componentDidMount() {
    document.querySelector("body").style.overflow = "hidden";
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    Axios({
      method: "post",
      url: `${API_URL}/customer_login`,
      headers: { "content-type": "application/json" },
      data,
    })
      .then((res) => {
        if (res.data.valid) {
          localStorage.setItem("token", res.data.token);
          auth.login(() => {
            window.location.reload();
          });
        } else {
          document.querySelector(".notify").style.padding = "5px";
          document.querySelector(".notify").innerHTML =
            '<h4 style="margin-top:0;">Xog khaldan ayad galisay!</h4>';
          document.querySelector(".notify").style.height = "40vh";
          document.querySelector(".notify").style.overflow = "hidden";
          document.querySelector(".notify").style.background = "red";

          setTimeout(() => {
            document.querySelector(".notify").innerHTML = "";
            document.querySelector(".notify").style.height = "0px";
            document.querySelector(".notify").style.padding = "0";
          }, 5000);
        }
      })
      .catch((err) => {
        document.querySelector(".notify").style.padding = "5px";
        document.querySelector(".notify").innerHTML =
          '<h4 style="margin-top:0;">Xog khaldan ayad galisay!</h4>';
        document.querySelector(".notify").style.height = "40vh";
        document.querySelector(".notify").style.overflow = "hidden";
        document.querySelector(".notify").style.background = "red";

        setTimeout(() => {
          document.querySelector(".notify").innerHTML = "";
          document.querySelector(".notify").style.height = "0px";
          document.querySelector(".notify").style.padding = "0";
        }, 5000);
      });
  };

  render() {
    const where = auth.isAuthenticated() ? (
      <Redirect to="/dashboard" />
    ) : (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <i className="fa fa-phone" /> &nbsp; &nbsp; &nbsp;
            <input
              type="number"
              name="phone"
              className="text-input text-input--material"
              placeholder="TALEEFAN NUMBERKA"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <i className="fa fa-lock" /> &nbsp; &nbsp; &nbsp;
            <input
              type="password"
              className="text-input text-input--material"
              placeholder="FURE SIREEDKA"
              name="password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <button type="submit" className="button">
              {" "}
              ii fur <i className="fa fa-send" style={{ color: "white" }}></i>
            </button>
          </div>
          <p className="divider">.......................................................</p>
          <a style={{textDecoration:"underline"}}onClick={() => this.props.history.push("/signup")}>
            is diwaan gali
          </a>
        </form>
        <div className="notify" />
      </div>
    );

    return where;
  }
}

export default Login;
