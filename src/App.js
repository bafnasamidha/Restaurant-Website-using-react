import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Front from './components/Front';
import About from './components/About';
import Contact from './components/Contact';
// import Reservation from './components/Reservation'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import {Routes,Route} from "react-router-dom";

//here we not use any react that's why we can't import react
 function App() {
  return (

  //  <Navbar title="Navbar2"/>
  <>
  {/* <Router> */}
  <Navbar/> 
  {/* <Routes>
    <Route path="/">
       <Reservation/>
    </Route>
  </Routes> */}
  <Front/>
  <About/>
  <Contact/>
  {/* <div> */}

  {/* </div> */}
  {/* </Router> */}
   {/* this switch component is taken from react router.com Quick start  */}
  </>
  );
}

export default App;
