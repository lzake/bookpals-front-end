import React, { Component } from "react";
import "./Booklist.css";
import Book from "./Book.js";
import axios from "axios";

class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      googleThumbnail: []
    };
    this.showBooks = this.showBooks.bind(this);
  }

  showBooks() {
    let myUrl = "";
    if (process.env.NODE_ENV === "production") {
      myUrl = process.env.DB_URL;
    } else {
      myUrl = "http://localhost:8080/books";
    }
    let bookData;
    axios
      .get(myUrl)
      .then(res => {
        console.log(res);
        bookData = res.data;
        this.setState({ data: bookData });
      })
      .catch(err => {
        console.log(`Something is wrong ${err}`);
        bookData = localStorage.getItem(myUrl);
      });
  }

  render() {
    return (
      <div className="Booklist-container">
        {this.state.data.map(item => {
          return (
            <Book
              key={item._id}
              title={item.title}
              author={item.author}
              description={item.description}
              // src="http://www.thepurposeisprofit.com/wp-content/uploads/2014/04/0530_WVlibraries.jpg"
            ></Book>
          );
        })}
        <div className="button-container">
          <button className="btn btn-primary btn-lg" onClick={this.showBooks}>
            See All Our Books
          </button>
        </div>
      </div>
    );
  }
}
export default Booklist;
