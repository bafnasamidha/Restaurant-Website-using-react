// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import About from "./components/About";
import Contact from "./components/Contact";
import Block from "./components/Block";
// import Reservation from "./components/Reservation";

// import { BrowserRouter as Router,
//   Switch, Route, Link } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

//here we not use any react that's why we can't import react
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/about",
  //     element: (
  //       <>
  //         <Navbar />
  //         <Front />
  //         <Contact />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Navbar />
  //         <Reservation />
  //         <Contact />
  //       </>
  //     ),
  //   },
  // ]);
  return (
    //  <Navbar title="Navbar2"/>
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <Front />
          </Route>
          <Route path="/">
            <Reservation />
          </Route>
        </Switch>
        <Contact />
      </Router> */}
      {/* this switch component is taken from react router.com Quick start  */}
      {/* <RouterProvider router={router} /> */}
      <Navbar />
      <Front />
      <About />
      <Block />
      <Contact />
    </>
  );
}

export default App;
