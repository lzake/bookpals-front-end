import React, { Component } from "react";
import "./Search.css";
import axios from "axios";
import Book from "./Book.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      publisher: "",
      bookTitle: "",
      bookDescription: "",
      bookAuthor: ""
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeAuthor = this.changeAuthor.bind(this);
    this.changePublisher = this.changePublisher.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeTitle(evt) {
    this.setState({ title: evt.target.value });
    let title = evt.target.value;
    console.log(title);
  }
  changeAuthor(evt) {
    this.setState({ author: evt.target.value });
    let author = evt.target.value;
    console.log(author);
  }
  changePublisher(evt) {
    this.setState({ publisher: evt.target.value });
    let publisher = evt.target.value;
    console.log(publisher);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.title !== "") {
      axios
        .get(`http://localhost:8080/books/title/${this.state.title}`)
        .then(res => {
          let bookInfo = res.data[0];
          //   console.log(bookInfo.title);
          //   console.log(bookInfo.author);
          //   console.log(bookInfo.description);
          //   console.log(bookInfo.publisher);
          this.setState({ bookTitle: bookInfo.title });
          this.setState({ bookAuthor: bookInfo.author });
          this.setState({ bookDescription: bookInfo.description });
        });
    } else if (this.state.author !== "") {
      axios
        .get(`http://localhost:8080/books/author/${this.state.author}`)
        .then(res => {
          let bookInfo = res.data[0];
          console.log(bookInfo);
          this.setState({ bookTitle: bookInfo.title });
          this.setState({ bookAuthor: bookInfo.author });
          this.setState({ bookDescription: bookInfo.description });
        });
    } else if (this.state.author !== "") {
    } else {
      alert("Please enter a valid search term");
    }
  }

  render() {
    return (
      <div className="Search-container">
        <form className="form" action="">
          <label className="label" htmlFor="">
            Titles <br />
            <input type="text" onChange={this.changeTitle} />
          </label>
          <br />
          <label className="label" htmlFor="">
            Authors <br />
            <input type="text" onChange={this.changeAuthor} />
          </label>
          <br />
          <label className="label" htmlFor="">
            Publishers <br />
            <input type="text" onChange={this.changePublisher} />
          </label>
          <br />
          <input className="submit" onClick={this.handleSubmit} type="submit" />
        </form>
        <Book
          title={this.state.bookTitle}
          author={this.state.bookAuthor}
          description={this.state.bookDescription}
        ></Book>
      </div>
    );
  }
}
export default Search;
