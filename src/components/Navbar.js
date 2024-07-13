// rfc+tab--react function based components
import React, { useState } from "react"; //import 'useState' hook from react
//impt+tab--proptypes
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      {/* const [count, setCount] = useState("Home");  */}
      {/* count="HOME" */}
      {/* incorrect way to change the state  */}
      {/* setCount("HOME"); */}
      {/* correct way to change the state */}
      <nav className="navigate">
        <a className="navitem" href="#section1">
          HOME
        </a>
        <a className="navitem" href="#section2">
          ABOUT US
        </a>
        <a className="navitem" href="#section5">
          OUR STORY
        </a>
        <a className="navitem" href="#section3">
          MENU
        </a>
        <a className="navitem" href="#section4">
          CONTACT US
        </a> 

        <div className="buttons">
          <a className="button" href="">
            Reservation
          </a>
          <a  className="button" href="">
            Order Now
          </a>
        </div>
      </nav>
    </>
  );
}
// Navbar.PropTypes={
//     title:PropTypes.string.isRequired
// }

// Navbar.defaultProps={
//     title:"default navbar"
// }
