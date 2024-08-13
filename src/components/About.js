// import React, { useState } from "react";
import React from "react";
import ambience6 from "./ambience6.jpeg";

export default function About() {
  // const [play,setPlay]=useState(true);
  //  let showIcon=(play)=>{
  //   setPlay(!play)
  // }

  return (
    <div className="box1 " id="section2">
      <div className="box2">
        <div className="about_content">
          <h1 className="about_head">ABOUT</h1>
          <div>"A taste of home, served with a smile."</div>
          <div> "Where good company meets good food."</div>
          <div>"Escape the ordinary, find extraordinary flavors."</div>
          <div>
            "Flavors that dance on your tongue, memories linger in your heart."
          </div>
          <div>
            "An adventure for your taste buds, a feast for your senses."
          </div>
          <div>"Not just a meal, a culinary journey."</div>
          <div>"Good vibes and good eats,</div>
          <div> what more could you ask for?"</div>
          <div>
            "Where friends gather, laughter grows, and bellies get happy."
          </div>
          <div>"Come hungry, leave happy (and maybe a little stuffed)."</div>
        </div>
        <div className="images">
          <img
            src={ambience6}
            alt=""
            style={{
              height: "710px",
              width: "650px",
            }}
          />
          {/* play button  */}
          <i
            class="fa-solid fa-play fa-2xl"
            visibility="hidden"
            style={{
              color: "white",
              position: "absolute",
              top: "85%",
              left: "70%",
              zIndex: "100",
              transform: "translate(-50%, -50%)",
            }}
          ></i>
          {/* pause button  */}
          {/* <i class="fa-solid fa-pause fa-2xl" style={{
              color: "white",
              position: "absolute",
              top: "85%",
              left: "70%",
              zIndex:"100",
            }}>
              
            </i> */}
        </div>
      </div>
    </div>
  );
}
