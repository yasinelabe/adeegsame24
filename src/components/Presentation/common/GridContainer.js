import React, { useEffect } from "react";

import Categories from "../Categories";
import Nav from "./Nav";
import TopCategories from "../TopCategories";
import { RootContext } from "../../../context/RootContext";
import Footer from "./Footer";
export default function GridContainer(props) {
  let context = React.useContext(RootContext);

  useEffect(() => {
    let contnt = document.getElementById("content");
    context.setContent(contnt.childNodes);
    context.setHome();
  }, []);

  return (
    <div className="grid_container">
      <div id="shadow" />
      <Nav />
      <section id="categories" className="no-print">
          <TopCategories />
      </section>
      <section id="content">
        <Categories />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
