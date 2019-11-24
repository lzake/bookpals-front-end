import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Booklist from "./components/Booklist.js";
import AddBook from "./components/AddBook.js";

function App() {
  return (
    <Router className="Router">
      <div className="Bookpals-circle-container">
        <div className="Bookpals-circle yellow"></div>
        <div className="Bookpals-circle pink"></div>
        <div className="Bookpals-circle white"></div>
        <h1 className="Bookpals-title">Book Pals </h1>
      </div>
      <div className="nav-container">
        <nav className=" navbar">
          <div className="link-container">
            <Link to="/" className="navLink">
              Home
            </Link>
            <Link to="/books" className="navLink">
              Books
            </Link>
            <Link to="/books/add" className="navLink">
              Add Books
            </Link>
          </div>
        </nav>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Booklist} />
      <Route path="/books/add" render={props => <AddBook {...props} />} />
    </Router>
  );
}

export default App;
