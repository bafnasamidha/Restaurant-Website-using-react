// rfc+tab--react function based components
import React ,{useState}from 'react'//import 'useState' hook from react
//impt+tab--proptypes
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    
  {/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#"> {props.title} </a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">Link</a>
        </li>
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classNameName="dropdown-menu">
            <li><a classNameName="dropdown-item" href="#">Action</a></li>
            <li><a classNameName="dropdown-item" href="#">Another action</a></li>
            <li><hr classNameName="dropdown-divider"/></li>
            <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  */}
 {/* const [count, setCount] = useState("Home");  */}
{/* count="HOME" */}
{/* incorrect way to change the state  */} 
{/* setCount("HOME"); */}
{/* correct way to change the state */}
<nav className="navigate">
                <a className="navitem" href="#section1">HOME</a>
                <a className="navitem" href="#section2">ABOUT US</a>
                <a className="navitem" href="#section5">OUR STORY</a>
                <a className="navitem" href="#section3">MENU</a>
                <a className="navitem" href="#section4">CONTACT US</a>


                <div className="buttons">
                    <a href="ep_26.2.html" className="button">Reservation</a>
                    <a href="" className="button">Order Now</a>
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