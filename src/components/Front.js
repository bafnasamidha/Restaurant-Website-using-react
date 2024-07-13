import React from 'react'
import img_main from './front5.jpg'
export default function Front() {
 
  return (
    <>
     <section id="section1">
      
      <img src={img_main}  alt="" className="scroll_image" id="img1"/>
    </section>
    <div className='title'>
      {/* <i class="fa-brands fa-react fa-xl" style={{
        color: "#fafcff",
        marginLeft: "50px",
        marginBottom: "0px",
        height: "0px",
        width: "0px",
        }}></i> */}
      <p>Daastaan</p>
    </div>
    <div>
    <p className='leftarrow'>&#11207; </p>
    </div>
    <div>
    <p className='rightarrow'> &#11208; </p>
    </div>
    </>
   
        
    );
}