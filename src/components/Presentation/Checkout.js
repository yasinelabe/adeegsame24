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
      })
    //  axios({
    //   method: "post",
    //   url: "https://api.waafi.com/asm",
    //   headers: { "content-type": "application/json" },
    //   data: JSON.stringify({
    //     "schemaVersion": "1.0",
    //     "requestId": "123122",
    //     "timestamp": Date.now(),
    //     "channelName": "WEB",
    //     "serviceName": "API_PURCHASE",
    //     "sessionId": localStorage.getItem("token"),
    //     "serviceParams": {
    //         "merchantUid": "M0910238",
    //         "apiUserId": "1000307",
    //         "apiKey": "API-1441673838AHX",
    //         "paymentMethod": "MWALLET_ACCOUNT",
    //         "payerInfo": {
    //           "accountNo": JSON.parse(localStorage.getItem("user"))[0].phone,
    //           "accountHolder": JSON.parse(localStorage.getItem("user"))[0].fullname
    //         },
            
    //         "transactionInfo": {
    //           "referenceId": 'testing',
    //             "invoiceId": "8789wwerer2342344",
    //             "amount": totalprice / 8500,
    //             "currency": "USD",
    //             "description": "iib adeegsame24 "
             
    //         }
    //     }
    // }),
    // })
      .then((res) => {
       console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };



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
        iibso
      </button>
      
    </React.Fragment>
  );
}
