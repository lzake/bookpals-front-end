import React, { Component } from "react";
import "./Booklist.css";
import Book from "./Book.js";
import axios from "axios";
import Searchbar from "./Searchbar.js";

class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      googleThumbnail: [],
      selected: "All",
      allBooks: true,
      title: "",
      author: "",
      publisher: "",
      bookTitle: "",
      bookDescription: "",
      bookAuthor: "",
      bookPublisher: "",
      bookImage: false,
      bookContainer: "hide",
      buttonClass: "btn btn-primary searchbar-button",
      refresh: false
    };
    this.changeSelected = this.changeSelected.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeAuthor = this.changeAuthor.bind(this);
    this.changePublisher = this.changePublisher.bind(this);
    this.submit = this.submit.bind(this);
  }
  changeTitle(newTitle) {
    this.setState({ title: newTitle });
    this.setState({ allBooks: true });
  }
  changeAuthor(newAuthor) {
    this.setState({ author: newAuthor });
  }
  changePublisher(newPublisher) {
    this.setState({ publisher: newPublisher });
  }
  submit(evt) {
    evt.preventDefault();
    if (this.state.title !== "") {
      axios
        .get(`https://bola-api.herokuapp.com/books/title/${this.state.title}`)
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
    } else if (this.state.author !== "") {
      axios
        .get(`https://bola-api.herokuapp.com/books/author/${this.state.author}`)
        .then(res => {
          let bookInfo = res.data[0];
          console.log(bookInfo);
          this.setState({ bookTitle: bookInfo.title });
          this.setState({ bookAuthor: bookInfo.author });
          this.setState({ bookDescription: bookInfo.description });
          this.setState({ bookPublisher: bookInfo.publisher });
          this.setState({ bookImage: bookInfo.image });
          this.setState({ bookContainer: "book-container" });
          this.setState({ author: "" });
          alert("Success!");
        });
    } else if (this.state.publisher !== "") {
      axios
        .get(
          `https://bola-api.herokuapp.com/books/publisher/${this.state.publisher}`
        )
        .then(res => {
          let bookInfo = res.data[0];
          console.log(bookInfo);
          this.setState({ bookTitle: bookInfo.title });
          this.setState({ bookAuthor: bookInfo.author });
          this.setState({ bookDescription: bookInfo.description });
          this.setState({ bookPublisher: bookInfo.publisher });
          this.setState({ bookImage: bookInfo.image });
          this.setState({ bookContainer: "book-container" });
          this.setState({ publisher: "" });
          alert("Success!");
        });
    } else {
      alert("Please enter a valid search term");
    }
  }

  changeSelected(newValue) {
    this.setState({ selected: newValue });
    if (newValue === "All") {
      this.setState({ allBooks: true });
    } else {
      this.setState({ allBooks: false });
    }
  }
  componentDidMount() {
    let myUrl = "https://bola-api.herokuapp.com/books";
    // if (process.env.NODE_ENV === "production") {
    //   myUrl = process.env.DB_URL;
    // } else {
    //   myUrl = "https://bola-api.herokuapp.com/books";
    // }
    let bookData;
    axios
      .get(myUrl)
      .then(res => {
        bookData = res.data;
        this.setState({ data: bookData });
        console.log(bookData);
      })

      .catch(err => {
        console.log(`Something is wrong ${err}`);
      });
  }

  render() {
    if (this.state.bookData) {
      let list = this.state.bookData.map(item => {
        return (
          <Book
            className="book"
            key={item._id}
            title={item.title}
            author={item.author}
            description={item.description}
            publisher={item.publisher}
            changeTitle={this.changeTitle}
            src={
              item.image
                ? item.image
                : "https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg?w=412&quality=85"
            }
          ></Book>
        );
      });
      return <div className="indiv-job">{list}</div>;
    }
  }
  // if (this.state.allBooks === true) {
  //   return (
  //     <div className="Booklist-container">
  //       <Searchbar
  //         selected={this.state.selected}
  //         changeSelected={this.changeSelected}
  //       ></Searchbar>

  //       <div className="book-container">
  //         {this.state.data.map(item => {
  //           return (
  //             <Book
  //               className="book"
  //               key={item._id}
  //               title={item.title}
  //               author={item.author}
  //               description={item.description}
  //               publisher={item.publisher}
  //               changeTitle={this.changeTitle}
  //               src={
  //                 item.image
  //                   ? item.image
  //                   : "https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg?w=412&quality=85"
  //               }
  //             ></Book>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }
  // if (this.state.allBooks === true) {
  //   return (
  //     <div className="Booklist-container">
  //       <Searchbar
  //         selected={this.state.selected}
  //         changeSelected={this.changeSelected}
  //       ></Searchbar>

  //       <div className="book-container">
  //         {this.state.data.map(item => {
  //           return (
  //             <Book
  //               className="book"
  //               key={item._id}
  //               title={item.title}
  //               author={item.author}
  //               description={item.description}
  //               publisher={item.publisher}
  //               changeTitle={this.changeTitle}
  //               src={
  //                 item.image
  //                   ? item.image
  //                   : "https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg?w=412&quality=85"
  //               }
  //             ></Book>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }
  // if (this.state.allBooks === false) {
  //   return (
  //     <div>
  //       <Searchbar
  //         selected={this.state.selected}
  //         changeSelected={this.changeSelected}
  //         changeTitle={this.changeTitle}
  //         changeAuthor={this.changeAuthor}
  //         changePublisher={this.changePublisher}
  //         submit={this.submit}
  //         title={this.state.title}
  //         author={this.state.author}
  //         publisher={this.state.publisher}
  //         buttonClass={this.state.buttonClass}
  //       ></Searchbar>
  //       <div className={this.state.bookContainer}>
  //         <Book
  //           title={this.state.bookTitle}
  //           author={this.state.bookAuthor}
  //           description={this.state.bookDescription}
  //           publisher={this.state.bookPublisher}
  //           src={
  //             this.state.bookImage
  //               ? this.state.bookImage
  //               : "https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg?w=412&quality=85"
  //           }
  //         ></Book>
  //       </div>
  //     </div>
  //   );
  // }
}
export default Booklist;
