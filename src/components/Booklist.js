import React, { Component } from "react";
import "./Booklist.css";
import axios from "axios";
import Modal from "./Modal/Modal.js";
// import Book from "./Book.js";
import Slider from "./carousel/Slider.js";
class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      index: 0,
      show: false,
      currentIndex: 0,
      title: "",
      desc: "",
      auth: "",
      pub: "",
      isbn10: "",
      isbn13: "",
      image: "",
      id: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://bola-api.herokuapp.com/books")
      .then(res => {
        let allBooks = res.data;
        console.log(allBooks[0]);
        this.setState({ bookData: allBooks });
      })
      .catch(err => {
        console.log(err);
      });
  }
  delete = book => {
    axios
      .delete(`https://bola-api.herokuapp.com/books/id/${book}`)
      .then(() => {
        axios.get("https://bola-api.herokuapp.com/books").then(res => {
          this.setState({ bookData: res.data });
        });
      })
      .catch(err => console.log(err))
      .catch(err => console.log(err));
  };

  getIndex = index => {
    let book = this.state.bookData[index];
    console.log(book._id);
    this.setState({
      title: `${book.title}`,
      desc: `${book.description}`,
      auth: `${book.author}`,
      pub: `${book.publisher}`,
      isbn10: `${book.isbns[0].isbn10}`,
      isbn13: `${book.isbns[0].isbn13}`,
      image: `${book.image}`,
      id: `${book._id}`
    });
  };

  show = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    if (this.state.show) {
      return (
        <div>
          <Modal hideModal={this.hideModal} {...this.state}></Modal>
          <Slider
            allBooks={this.state.bookData}
            delete={this.delete}
            show={this.show}
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
            getIndex={this.getIndex}
          ></Slider>
        </div>
      );
    } else if (!this.state.show) {
      return (
        <div>
          <Slider
            allBooks={this.state.bookData}
            delete={this.delete}
            edit={this.edit}
            show={this.show}
            getIndex={this.getIndex}
          ></Slider>
        </div>
      );
    }
  }
}
export default Booklist;
