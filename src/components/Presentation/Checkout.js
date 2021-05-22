import React from "react";
import { RootContext } from "../../context/RootContext";
import API_URL from "../../config/config";
import axios from "axios";
import { Redirect } from "react-router";

export default function Checkout(props) {
  let context = React.useContext(RootContext);
  let cart = context.getCart();
  // console.log(cart);
  let totalprice = 0;

  const handleDalab = () => {
    const order = [
      context.getCart(),
      { token: localStorage.getItem("token"), totalprice: totalprice },
    ];
    axios({
      method: "post",
      url: API_URL + "/create_order",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(order),
    })
      .then((res) => {
        let data = res.data;
        if (data.result !== false) {
          window.location.href = "/success"
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const printMe = () => {
      return window.print()
  }

  const lists = cart.map((item, i) => {
    const cabbir = item.cabbirka.split(",");
    const itemprice = cabbir[0];
    totalprice = totalprice + parseInt(itemprice) * parseInt(item.xaddiga);

    return (
      <tr key={item.pid}>
        <td> {item.productname} </td>
        <td> {item.xaddiga + "" + cabbir[1]} </td>
        <td> {parseFloat(itemprice).toFixed(2)} </td>
        <td>{(parseFloat(itemprice) * parseInt(item.xaddiga)).toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <table className="order_table" border="1">
        <thead>
          <tr>
            <th> Item </th>
            <th> Qty </th>
            <th> Price </th>
            <th> Total </th>
          </tr>
        </thead>
        <tbody>{lists}</tbody>
        <tfoot>
          <tr>
            <th> </th>
            <th> </th>
            <th colSpan="2">
              <p className="bold">
                Xisaabta = {"SLSH " + totalprice.toFixed(2)}
              </p>
            </th>
          </tr>
        </tfoot>
      </table>
      <button
        className="checkout no-print"
        onClick={() => {
          handleDalab();
        }}
      >
        Dalbo
      </button>
      <button
        className="print no-print"
        onClick={() => {
          printMe();
        }}
      >
        Print
      </button>
    </React.Fragment>
  );
}
