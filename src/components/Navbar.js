import React, { useState } from "react"; //import 'useState' hook from react

const handleClick=(title_)=>{
  document.title="daastaan-"+ title_;
}

export default function Navbar() {
  return (
    <>
      {/* const [count, setCount] = useState("Home");  */}
      {/* count="HOME" */}
      {/* incorrect way to change the state  */}
      {/* setCount("HOME"); */}
      {/* correct way to change the state */}

      <nav className="navigate">
        <a className="navitem" href="#section1" onClick={handleClick("HOME")}>HOME</a>
        <a className="navitem" href="#section2" onClick={handleClick("About")}>ABOUT US</a>
        <a className="navitem" href="#section5" onClick={handleClick("Storyline")}>OUR STORY</a>
        <a className="navitem" href="#section3" onClick={handleClick("Menu")}>MENU</a>
        <a className="navitem" href="#section4" onClick={handleClick("Contact")}>CONTACT US</a>

       

        <div className="buttons">
          <a className="button" href="/">Reservation</a>
          <a className="button" href="/">Order Now</a>
        </div>
      </nav>
    </>
  );
}
