import React, { useState, useEffect } from "react";
import { RootContext } from "../../../context/RootContext";
// import Categories from '../Categories';

export default function Header(props) {
  const [dalab, Setdalab] = useState({
    pid: null,
    productname: null,
    xaddiga: 1,
    cabbirka: null,
  });
  let context = React.useContext(RootContext);
  let cart = context.getCart();

  const setCheckOut = (v) => {
    context.setCheckOut(v);
  };
  const addToCart = () => {
    // context.addCart(product);
    context.setPopup(false);
    // console.log(dalab);
    context.addCart(dalab);
    //add dalab to the upper state....i insha
    document.getElementById("xaddiga").value = "";
    var cabir = document.getElementById("cabbirka");
    cabir.value = "";
  };

  const handleChange = (e, product) => {
    e.preventDefault();
    Setdalab({
      ...dalab,
      [e.target.name]: e.target.value,
      pid: product[0],
      productname: product[1],
    });
  };

  const hidePopup = () => {
    context.setPopup(false);
    context.setSelected(null);
  };

  const content = context.getContent();
  let removed = [];
  const handleSearch = (e) => {
    const name = document.querySelectorAll(".title");
    name.forEach((item, index, array) => {
      let regex = new RegExp(e.target.value.toLowerCase(), "g");
      let parent = item.parentNode.parentNode.parentNode;
      const cat = item.parentNode.parentNode;
      if (item.textContent.toLowerCase().match(regex) === null) {
        removed.push({ parent: parent, cat: cat });
        cat.remove();
      }
    });

    if (e.target.value === "") {
      removed.map((it) => {
        it.parent.appendChild(it.cat);
      });
    }
  };

  const quantities = context.getQuantities();
  let quantitieslist = <option>majiraan cabbirro</option>;

  if (quantities.length >= 1) {
    quantitieslist = quantities.map((quantity, i) => {
      return i === 0 ? (
        <React.Fragment key={quantity.quantity}>
          <option> </option>
          <option value={[quantity.price, quantity.quantity]}>
            {quantity.quantity}
          </option>
        </React.Fragment>
      ) : (
        <option key={quantity.quantity} value={quantity.price}>
          {quantity.quantity}
        </option>
      );
    });
  }

  return (
    <header id="topheader" className="no-print" key={1}>
      <div className="container">
        <div className="left-head">
          <a href="#" id="bar" className="bar">
            <i className="fa fa-bars" id="nav-bar" />
          </a>
          <a href="#" id="return" className="return">
            <i className="fa fa-arrow-left" id="nav-bar" />
          </a>
          <span id="sitename">Adeegsame24</span>
        </div>

        <div className="center-head">
          <input
            type="text"
            id="searchinput"
            placeholder="Enter Product Name"
            onChange={handleSearch}
          />
        </div>

        <div className="right-head">
          <a href="#" id="searchbtn">
            <i className="fa fa-search" />
          </a>

          {cart.length > 0 ? (
            <a
              href="#"
              id="cart"
              onClick={() => {
                setCheckOut(true);
              }}
            >
              <i className="fa fa-shopping-cart fa-2x" />
              <span className="counter">{context.getTotalCart()}</span>
            </a>
          ) : (
            <a href="#" id="cart">
              <i className="fa fa-shopping-cart fa-2x" />
              <span className="counter">{context.getTotalCart()}</span>
            </a>
          )}
        </div>
      </div>

      <div
        className="popup"
        style={context.getPopup() ? { display: "block" } : { display: "none" }}
      >
        <div className="group">
          <select
            className="input select"
            name="cabbirka"
            id="cabbirka"
            onChange={(e) => handleChange(e, context.getSelected())}
          >
            {quantitieslist}
          </select>

          <input
            type="number"
            className="input"
            name="xaddiga"
            id="xaddiga"
            value="1"
            placeholder="xaddiga"
          onChange={(e) => handleChange(e, context.getSelected())}
          />
        </div>

        <button className="button" onClick={() => addToCart()}>
          Qaado
        </button>
        <button className="button back" onClick={() => hidePopup()}>
          Ka Noqo
        </button>
      </div>
    </header>
  );
}
