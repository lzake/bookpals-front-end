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
      bookAuthor: "",
      bookPublisher: "",
      bookImage: false,
      bookContainer: "hide"
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
          console.log(bookInfo.title);
          console.log(bookInfo.author);
          console.log(bookInfo.description);
          console.log(bookInfo.publisher);
          this.setState({ bookTitle: bookInfo.title });
          this.setState({ bookAuthor: bookInfo.author });
          this.setState({ bookDescription: bookInfo.description });
          this.setState({ bookPublisher: bookInfo.publisher });
          this.setState({ bookImage: bookInfo.image });
          this.setState({ bookContainer: "Book-container" });
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
          this.setState({ bookPublisher: bookInfo.publisher });
          this.setState({ bookImage: bookInfo.image });
          this.setState({ bookContainer: "Book-container" });
        });
    } else if (this.state.publisher !== "") {
      axios
        .get(`http://localhost:8080/books/publisher/${this.state.publisher}`)
        .then(res => {
          let bookInfo = res.data[0];
          console.log(bookInfo);
          this.setState({ bookTitle: bookInfo.title });
          this.setState({ bookAuthor: bookInfo.author });
          this.setState({ bookDescription: bookInfo.description });
          this.setState({ bookPublisher: bookInfo.publisher });
          this.setState({ bookImage: bookInfo.image });
          this.setState({ bookContainer: "Book-container" });
        });
    } else {
      alert("Please enter a valid search term");
    }
  }

  render() {
    return (
      <div className="Search-container">
        <div className="intro">
          <p>
            To search for a book in our database, search by title, author, or
            publisher.{" "}
          </p>
        </div>

        <div className="Form-container">
          <label className="label" htmlFor="">
            Titles <br />
            <input type="text" onChange={this.changeTitle} />
            <h6>OR</h6>
          </label>
          <br />
          <label className="label" htmlFor="">
            Authors <br />
            <input type="text" onChange={this.changeAuthor} />
            <h6>OR</h6>
          </label>
          <br />
          <label className="label" htmlFor="">
            Publishers <br />
            <input type="text" onChange={this.changePublisher} />
          </label>
          <br />
          <input className="submit" onClick={this.handleSubmit} type="submit" />
        </div>
        <div className={this.state.bookContainer}>
          <Book
            title={this.state.bookTitle}
            author={this.state.bookAuthor}
            description={this.state.bookDescription}
            publisher={this.state.bookPublisher}
            src={
              this.state.bookImage
                ? this.state.bookImage
                : "https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg?w=412&quality=85"
            }
          ></Book>
        </div>
      </div>
    );
  }
}
export default Search;
