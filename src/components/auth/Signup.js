import React, { Component } from "react";
import Axios from "axios";
import auth from "./auth";
import API_URL from "../../config/config";
import { Redirect } from "react-router-dom";

export class Signup extends Component {
  state = {
    fullname: null,
    phone: null,
    address: null,
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
    if(this.state.phone.toString().length < 7){
      document.querySelector(".notify").style.padding = "10px";

      document.querySelector(".notify").innerHTML =
        "<p>Fadlan number saxsan isticmaal!</p>";
      document.querySelector(".notify").style.height = "10vh";
      document.querySelector(".notify").style.overflow = "hidden";
      document.querySelector(".notify").style.background = "red";

      setTimeout(() => {
        document.querySelector(".notify").innerHTML = "";
        document.querySelector(".notify").style.height = "0px";
        document.querySelector(".notify").style.padding = "0";
      }, 5000);

      return false;
    }
    const data = this.state;
    Axios({
      method: "post",
      url: `${API_URL}/create_customer`,
      headers: { "content-type": "application/json" },
      data,
    })
      .then((res) => {
        if (res.data.success) {
          document.querySelector(".notify").style.padding = "10px";
          document.querySelector(".notify").innerHTML =
            "<p>waad is diwaan galisay mahadsanid</p>";
          document.querySelector(".notify").style.height = "10vh";
          document.querySelector(".notify").style.overflow = "hidden";
          document.querySelector(".notify").style.background = "green";

          setTimeout(() => {
            document.querySelector(".notify").innerHTML = "";
            document.querySelector(".notify").style.height = "0";
            document.querySelector(".notify").style.padding = "0";
            this.props.history.push("/login");
          }, 5000);
        } else if (res.data.exists) {
          document.querySelector(".notify").style.padding = "10px";

          document.querySelector(".notify").innerHTML =
            "<p>numberka aad isticmaashay hore ayaa la isugu diwan galiyay</p>";
          document.querySelector(".notify").style.height = "10vh";
          document.querySelector(".notify").style.overflow = "hidden";
          document.querySelector(".notify").style.background = "red";

          setTimeout(() => {
            document.querySelector(".notify").innerHTML = "";
            document.querySelector(".notify").style.height = "0px";
            document.querySelector(".notify").style.padding = "0";
          }, 5000);
        } else {
          document.querySelector(".notify").style.padding = "10px";

          document.querySelector(".notify").innerHTML =
            "<p>khadka ayaa kaa xun!</p>";
          document.querySelector(".notify").style.height = "10vh";
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
        document.querySelector(".notify").style.padding = "10px";

        document.querySelector(".notify").innerHTML =
          "<p>Cillad ayaa dhacday, mar kale isku day!</p>";
        document.querySelector(".notify").style.height = "10vh";
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
            <i className="fa fa-user" /> &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              className="text-input text-input--material"
              placeholder="MAGACA OO BUUXA"
              onChange={this.handleChange}
              name="fullname"
              required
            />
          </div>
          <div>
            <i className="fa fa-home" /> &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              className="text-input text-input--material"
              placeholder="XAAFADDA"
              onChange={this.handleChange}
              name="address"
              required
            />
          </div>
          <div>
            <i className="fa fa-phone" /> &nbsp; &nbsp; &nbsp;
            <input
              type="number"
              className="text-input text-input--material"
              placeholder="TALEEFAN NUMBERKA"
              onChange={this.handleChange}
              name="phone"
              required
            />
          </div>
          <div>
            <i className="fa fa-lock" /> &nbsp; &nbsp; &nbsp;
            <input
              type="password"
              className="text-input text-input--material"
              placeholder="FURE SIREEDKA"
              onChange={this.handleChange}
              name="password"
              required
            />
          </div>
          <div>
            <input type="submit" className="button" value="i diwaan gali" />
          </div>
          <p className="divider">
            .......................................................
          </p>
          <a style={{textDecoration:"underline"}} onClick={() => this.props.history.push("/login")}>
            Gal Account-kaaga
          </a>
        </form>
        <div className="notify" />
      </div>
    );

    return where;
  }
}

export default Signup;
