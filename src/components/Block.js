import React from 'react'
// import ambience from "./ambience7.avif"
// import map from "./map - Copy.png";

export default function Block() {
  return (
    <div  className="block">
       {/* <iframe 
       src={"https://maps.google.com/"} 
       frameborder="0px" title= "come here!" style={
        {
          height:"320px",
          width:"100vw"
        }
       }></iframe> */}
       {/* <img  alt="not accessed" style={{
        height:"320px",
        width:"100vw"
       }} /> */}
       <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29023.389295523262!2d75.8459451364746!3d24.591830613285143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720809601117!5m2!1sen!2sin"} 
       style={{
        width: "100vw" ,
       height: "320px",
       }}
       width="100vw" 
       height="320" 
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
