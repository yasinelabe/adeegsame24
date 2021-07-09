import React from "react";
import Header from "./common/Header";
import Nav from "./common/Nav";

export default function Success() {
  return (
    <div className="grid_container">
      <Header />
      <div id="shadow" />
      <Nav />

      <section id="content" style={{ marginTop: "30px" }}>
        <div className="container">

            <div className="card mt-61">
                <div className="title">
                    <h3>MAHADSANID</h3>
                </div>
                <div className="sub-title">
                    <h6>Dalabkaagii waxa loo gudbiyay shirkadda , muddo yar kadib shirkadda 
                      ayaa kuso wici doonta  !</h6>
                </div>
                <div className="card-button">
                   <a href="/home" className="btn goback btn-large">Haye</a>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
}
