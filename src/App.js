import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import Booklist from "./components/Booklist.js";

function App() {
  return (
    <Router>
      <h1>NY Times Bestsellers </h1>
      <nav className="navbar navbar-dark bg-warning">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/books/search">Search</Link>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Booklist} />
      <Route path="/books/search" exact component={Search} />
      {/* <Route path="/books/titles/:title" exact component={SingleBook}></Route> */}
    </Router>
  );
}

export default App;
