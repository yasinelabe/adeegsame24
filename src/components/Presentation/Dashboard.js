import React, { useEffect } from "react";
import auth from "../auth/auth";
import axios from "axios";
import API_URL from "../../config/config";
import GridContainer from "./common/GridContainer";
import Header from "./common/Header.js";

const Dashboard = (props) => {
  useEffect(() => {
    axios({
      method: "post",
      url: API_URL + "/is_token_valid",
      headers: { "content-type": "application/json" },
      data: { token: localStorage.getItem("token") },
    })
      .then((res) => {
        if (res.data.valid) {
        } else {
          auth.logout(() => {
            props.history.push("/login");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    document.querySelector("body").style.overflow = "auto";
  }, []);
  return (
    <div>
      <Header />
      <GridContainer />
    </div>
  );
};

export default Dashboard;
