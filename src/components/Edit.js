import React, { Component } from "react";
import "./Edit.css";
import Searchbar from "./Searchbar.js";
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
      bookImage: "",
      selected: "Choose...",
      buttonClass: "hide",
      title: "",
      author: "",
      publisher: "",
      valueText: ""
    };
    // Binding functions responsible for submitting a post request
    this.changeOption = this.changeOption.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.descChange = this.descChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.publisherChange = this.publisherChange.bind(this);
    this.isbn10Change = this.isbn10Change.bind(this);
    this.isbn13Change = this.isbn13Change.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteBookByTitle = this.deleteBookByTitle.bind(this);

    //Binding functions responsible for submitting a delete request
    this.changeSelected = this.changeSelected.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeAuthor = this.changeAuthor.bind(this);
    this.changePublisher = this.changePublisher.bind(this);

    //Binding functions responsible for updating using put request
    this.editBookByTitle = this.editBookByTitle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.submit = this.submit.bind(this);
  }
  // These functions are for submitting a post request
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
  // These functions are for handling a delete request
  changeSelected(newValue) {
    this.setState({ selected: newValue });
  }
  changeTitle(newTitle) {
    this.setState({ title: newTitle });
  }
  changeAuthor(newAuthor) {
    this.setState({ author: newAuthor });
  }
  changePublisher(newPublisher) {
    this.setState({ publisher: newPublisher });
  }
  deleteBookByTitle(evt) {
    evt.preventDefault();
    if (this.state.title) {
      axios
        .delete(`http://localhost:8080/books/title/${this.state.title}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.setState({ title: "" });
    }
    if (this.state.author) {
      axios
        .delete(`http://localhost:8080/books/author/${this.state.author}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.setState({ author: "" });
    }
    if (this.state.publisher) {
      axios
        .delete(`http://localhost:8080/books/publisher/${this.state.publisher}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.setState({ publisher: "" });
    }
  }
  //Functions for a update requests

  editBookByTitle(evt) {
    console.log("This is working");
    if (this.state.title) {
      axios
        .put(
          `http://localhost:8080/books/title/${this.state.title}`,
          this.state.valueText,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then(res => console.log(res))
        .catch(err => console.log(err));
      // axios
      //   .put(
      //     `http://localhost:8080/books/title/${this.state.title}`,
      //     this.state.valueText
      //   )
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
      // axios
      //   .put(
      //     `http://localhost:8080/books/title/${this.state.title}`,
      //     this.state.valueText,
      //     { new: true }
      //   )
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    }
  }
  submit() {
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
          this.setState({ bookContainer: "book-container" });
          this.setState({ title: "" });
          alert("Success!");
        });
    }
  }
  changeText(evt) {
    evt.preventDefault();
    this.setState({ valueText: evt.target.value });
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
          <Searchbar
            selected={this.state.selected}
            changeSelected={this.changeSelected}
            changeTitle={this.changeTitle}
            changeAuthor={this.changeAuthor}
            changePublisher={this.changePublisher}
            title={this.state.title}
            author={this.state.author}
            publisher={this.state.publisher}
            buttonClass={this.state.buttonClass}
          ></Searchbar>
          <form>
            <div className="form-group text-area-container">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={this.state.valueText}
                onChange={this.changeText}
              ></textarea>
            </div>
          </form>
          <div className="button-container">
            <button className="button" onClick={this.editBookByTitle}>
              Edit Book Info
            </button>
          </div>
        </div>
      );
    } else if (this.state.valueSelect === "Delete Book from Database") {
      return (
        <div>
          <form>
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
            <Searchbar
              selected={this.state.selected}
              changeSelected={this.changeSelected}
              changeTitle={this.changeTitle}
              changeAuthor={this.changeAuthor}
              changePublisher={this.changePublisher}
              title={this.state.title}
              author={this.state.author}
              publisher={this.state.publisher}
              buttonClass={this.state.buttonClass}
            ></Searchbar>

            <div className="button-container">
              <button className="button" onClick={this.deleteBookByTitle}>
                Delete Book
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Edit;
