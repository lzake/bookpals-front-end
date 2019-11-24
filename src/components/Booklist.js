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
      translateValue: 0
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
          <Modal hideModal={this.hideModal}></Modal>
          <Slider
            allBooks={this.state.bookData}
            delete={this.delete}
            show={this.show}
            currentIndex={this.state.currentIndex}
            translateValue={this.state.translateValue}
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
            slid
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
            currentIndex={this.state.currentIndex}
            translateValue={this.state.translateValue}
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
          ></Slider>
        </div>
      );
    }
  }
}
export default Booklist;
