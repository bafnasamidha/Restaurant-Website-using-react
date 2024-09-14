import React from "react";
import img_main from "./front5.jpg";
import logo_image from "./loading-unscreen.gif"
export default function Front() {
  return (
    <>
      <section id="section1">
        <img src={img_main} alt="" className="main_image" id="img1" />
      </section>
      <div className="title">
        { <img src={logo_image} alt="" className="logo_image"/> }
        <div className="text_title">Daastaan</div>
      </div>
    </>
  );
}
