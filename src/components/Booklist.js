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
  }
  componentDidMount() {
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
        // console.log(res);
        bookData = res.data;
        this.setState({ data: bookData });
        console.log(res.data);
      })

      .catch(err => {
        console.log(`Something is wrong ${err}`);
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
              publisher={item.publisher}
              src={
                item.image
                  ? item.image
                  : "https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg?w=412&quality=85"
              }
            ></Book>
          );
        })}
        <div className="button-container"></div>
      </div>
    );
  }
}
export default Booklist;
