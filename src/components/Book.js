import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <h1>{this.props.book.title}</h1>
      </div>
    );
  }
}

export default Book;
