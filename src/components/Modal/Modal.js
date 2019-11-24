import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Modal">
        <form className="form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="title"
              placeholder="Title"
            />
            <label htmlFor="exampleInputEmail1">Book Description</label>
            <input
              type="textarea"
              className="form-control"
              aria-describedby="bookDescription"
              placeholder="Book Description"
            />
            <label htmlFor="exampleInputEmail1">Author</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="author"
              placeholder="Author"
            />

            <label htmlFor="exampleInputEmail1">Publisher</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="publisher"
              placeholder="Publisher"
            />

            <label htmlFor="exampleInputEmail1">isbn10</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="isbn10"
              placeholder="isbn10"
            />
            <label htmlFor="exampleInputEmail1">isbn13</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="isbn13"
              placeholder="isbn13"
            />
            <label htmlFor="exampleInputEmail1">image url</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="imageUrl"
              placeholder="image url"
            />
          </div>
          <div className="Modal-button-container">
            <button className="btn btn-dark">Close</button>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
