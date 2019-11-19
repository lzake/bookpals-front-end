import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";

import Booklist from "./components/Booklist.js";
import Edit from "./components/Edit.js";

function App() {
  return (
    <Router className="Router">
      <div className="Book-pals-container">
        <div className="cover">
          <h1 className="Book-pals-title">Book Pals </h1>
        </div>
      </div>
      <nav className=" navbar navbar-dark bg">
        <div className="link-container">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/books" className="navLink">
            Books
          </Link>
          <Link to="/books/edit" className="navLink">
            Edit
          </Link>
        </div>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Booklist} />
      <Route path="/books/Edit" exact component={Edit}></Route>
    </Router>
  );
}

export default App;
