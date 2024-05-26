import React, { useState } from 'react'

export default function About() {
 
  // let mystyle={
  //   color:"black",
  //   backgroundColor:"white" 
  // }
  // let mydarkstyle={
  //   color:"white",
  //   backgroundColor:"black"
  // }

  // let dark="Enable Dark Mode";
  // let light="Enable Light Mode";

  // const [myStyle,setmyStyle]=useState({
  //   color:"black",
  //   backgroundColor:"white" 
  // }) 

  // const[mode,myMode]=useState(dark)
  
  // const changeMode=()=>{
  //   if(mode===dark){
  //     setmyStyle(mydarkstyle);
  //     myMode(light)
  //   }
  //   else{
  //     setmyStyle(mystyle);
  //     myMode(dark)
  //   }
  // }

  return (
    
    <div >
      <section id="section2"  >
        
            <h1 id="sec2_head">About Us</h1>
            <div id="sec2_body">
                <div id="inner_sec2_body" >
                    <div>"A taste of home,</div>
                    <div> served with a smile."</div>
                    <div> "Where good company meets good food."</div>
                    <div>"Escape the ordinary, </div>
                    <div>find extraordinary flavors."</div>
                    <div>"Flavors that dance on your tongue,</div>
                    <div> memories linger in your heart."</div>
                    <div>"An adventure for your taste buds,</div>
                    <div> a feast for your senses."</div>
                    <div>"Not just a meal,</div>
                    <div> a culinary journey."</div>
                    <div>"Good vibes and good eats,</div>
                    <div> what more could you ask for?"</div>
                    <div>"Where friends gather,</div>
                    <div> laughter grows, and bellies get happy."</div>
                    <div>"Come hungry, leave happy (and maybe a little stuffed)."</div>
                </div>
            </div>
            {/* <div className="container my-5">
             <button type="button" className="btn btn-primary " onClick={changeMode}>{mode}</button>
            </div> */}
        </section>
    </div>
  )
}
