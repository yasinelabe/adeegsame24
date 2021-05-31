import React, { useState, useEffect } from "react";
import Products from "../Products";
import { RootContext } from "../../../context/RootContext";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TopCategoriesList = (props) => {
  let context = React.useContext(RootContext);

  const topCategoriesList = props.categories.map((category, i) => {
    return (
      <div key={category.pk_cat_id} className="item top_cat_parent">
        <div
          key={category.pk_cat_id}
          className="category_image item"
          style={{ backgroundImage: `url(${category.image_url})` }}
        ></div>
      </div>
    );
  });
  return (
    <OwlCarousel className="owl-theme" items="1" loop autoplay dots={false} >
      {topCategoriesList}
    </OwlCarousel>
  );
};

export default TopCategoriesList;
