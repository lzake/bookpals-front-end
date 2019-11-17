import React, { Component } from "react";
import "./Edit.css";
import Search from "./Search.js";
import axios from "axios";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSelect: "Select",
      bookTitle: "",
      bookDesc: "",
      bookAuthor: "",
      bookPublisher: "",
      bookIsbns: [],
      bookIsbn10: "",
      bookIsbn13: "",
      bookImage: ""
    };
    this.changeOption = this.changeOption.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.descChange = this.descChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.publisherChange = this.publisherChange.bind(this);
    this.isbn10Change = this.isbn10Change.bind(this);
    this.isbn13Change = this.isbn13Change.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeOption(evt) {
    this.setState({ valueSelect: evt.target.value });
    // console.log(evt.target.value);
  }
  titleChange(evt) {
    this.setState({ bookTitle: evt.target.value });
    // console.log(evt.target.value);
  }
  descChange(evt) {
    this.setState({ bookDesc: evt.target.value });
    // console.log(evt.target.value);
  }
  authorChange(evt) {
    this.setState({ bookAuthor: evt.target.value });
    // console.log(evt.target.value);
  }
  publisherChange(evt) {
    this.setState({ bookPublisher: evt.target.value });
    // console.log(evt.target.value);
  }
  isbn10Change(evt) {
    this.setState({ bookIsbn10: evt.target.value });
    // console.log(evt.target.value);
  }
  isbn13Change(evt) {
    this.setState({ bookIsbn13: evt.target.value });
    // console.log(evt.target.value);
  }
  imageChange(evt) {
    this.setState({ bookImage: evt.target.value });
    // console.log(evt.target.value);
  }
  handleSubmit(evt) {
    if (
      this.state.bookTitle !== "" &&
      this.state.bookAuthor !== "" &&
      this.state.bookPublisher !== "" &&
      this.state.bookDesc !== "" &&
      this.state.bookIsbn10 !== "" &&
      this.state.bookIsbn13 !== "" &&
      this.state.bookImage !== ""
    ) {
      console.log("Good Job!");
      axios
        .post("http://localhost:8080/books", {
          title: this.state.bookTitle,
          description: this.state.bookDesc,
          author: this.state.bookAuthor,

          publisher: this.state.bookPublisher,
          isbns: [
            { isbn10: this.state.bookIsbn10, isbn13: this.state.bookIsbn13 }
          ],
          image: this.state.bookImage
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      alert("Please Complete All Fields Before Submission");
    }
  }
  render() {
    if (this.state.valueSelect === "Select") {
      return (
        <div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Select</label>
              <select
                value={this.state.valueSelect}
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={this.changeOption}
              >
                <option>Select</option>
                <option>Add Book to Database</option>
                <option>Edit Info of Book in the Database</option>
                <option>Delete Book from Database</option>
              </select>
            </div>
          </form>
        </div>
      );
    } else if (this.state.valueSelect === "Add Book to Database") {
      return (
        <div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Select</label>
              <select
                value={this.state.value}
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={this.changeOption}
              >
                <option>Select</option>
                <option>Add Book to Database</option>
                <option>Edit Info of Book in the Database</option>
                <option>Delete Book from Database</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Title of Book"
                value={this.state.bookTitle}
                onChange={this.titleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Description of Book
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={this.state.bookDesc}
                onChange={this.descChange}
                placeholder="Description of Book"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Author</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Author of Book"
                value={this.state.bookAuthor}
                onChange={this.authorChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Publisher</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Publishing Company of Book"
                value={this.state.bookPublisher}
                onChange={this.publisherChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">isbn10</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="10 Digit isbn Number"
                value={this.state.bookIsbn10}
                onChange={this.isbn10Change}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">isbn13</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="13 Digit isbn Number"
                value={this.state.bookIsbn13}
                onChange={this.isbn13Change}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">
                Image url Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="url Address for Book Cover Image"
                value={this.state.bookImage}
                onChange={this.imageChange}
              />
            </div>
            <input
              className="submit"
              onClick={this.handleSubmit}
              type="submit"
            />
          </form>
        </div>
      );
    } else if (this.state.valueSelect === "Edit Info of Book in the Database") {
      return (
        <div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Select</label>
              <select
                value={this.state.valueSelect}
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={this.changeOption}
              >
                <option>Select</option>
                <option>Add Book to Database</option>
                <option>Edit Info of Book in the Database</option>
                <option>Delete Book from Database</option>
              </select>
            </div>
          </form>

          <Search className="search"></Search>
          <div className="button-container">
            <button className="button">Edit Book Info</button>
          </div>
        </div>
      );
    } else if (this.state.valueSelect === "Delete Book from Database") {
      return (
        <div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Select</label>
              <select
                value={this.state.valueSelect}
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={this.changeOption}
              >
                <option>Select</option>
                <option>Add Book to Database</option>
                <option>Edit Info of Book in the Database</option>
                <option>Delete Book from Database</option>
              </select>
            </div>
          </form>

          <Search></Search>
          <div className="button-container">
            <button className="button">Delete Book</button>
          </div>
        </div>
      );
    }
  }
}

export default Edit;
