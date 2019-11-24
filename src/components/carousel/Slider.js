import React, { Component } from "react";
import Slide from "./Slide.js";
import LeftArrow from "./LeftArrow.js";
import RightArrow from "./RightArrow.js";
import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }
  handleDelete = () => {
    let bookId = this.props.allBooks[this.state.currentIndex]._id;
    console.log(bookId);
    this.props.delete(bookId);
  };
  handleShow = () => {
    this.props.show();
    this.props.getIndex(this.state.currentIndex);
  };
  prevSlide = () => {
    if (this.state.currentIndex === 0) {
      return;
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };
  nextSlide = () => {
    if (this.state.currentIndex === this.props.allBooks.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.slideWidth()
    }));
  };
  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };
  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: `transform ease-out 0.45s`
          }}
        >
          {this.props.allBooks.map((book, i) => (
            <Slide key={i} image={book} />
          ))}
        </div>
        <div className="slider-arrow-container">
          <LeftArrow prevSlide={this.prevSlide}></LeftArrow>
          <RightArrow nextSlide={this.nextSlide}></RightArrow>
        </div>
        <div className="slider-button-container">
          <button className="slider-buttons" onClick={this.handleShow}>
            Edit
          </button>
          <button className="slider-buttons" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
