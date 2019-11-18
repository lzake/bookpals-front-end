import React, { Component } from "react";
import "./Searchbar.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handlePublisherChange = this.handlePublisherChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(evt) {
    this.props.changeTitle(evt.target.value);
    console.log(evt.target.value);
    evt.preventDefault();
  }
  handleAuthorChange(evt) {
    this.props.changeAuthor(evt.target.value);
    console.log(evt.target.value);
    evt.preventDefault();
  }
  handlePublisherChange(evt) {
    this.props.changePublisher(evt.target.value);
    console.log(evt.target.value);
    evt.preventDefault();
  }

  handleChange(evt) {
    this.props.changeSelected(evt.target.value);
    console.log(evt.target.value);
    evt.preventDefault();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submit(evt);
  }

  render() {
    if (this.props.selected === "Choose...") {
      return (
        <div className="choose-container">
          <div>
            <label>Example select</label>
            <select
              className="form-control"
              value={this.props.selected}
              onChange={this.handleChange}
            >
              <option>Choose...</option>
              <option>Title</option>
              <option>Author</option>
              <option>Publisher</option>
            </select>
          </div>
        </div>
      );
    } else if (this.props.selected === "Title") {
      return (
        <div className="title-container">
          <div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              value={this.props.selected}
              onChange={this.handleChange}
            >
              <option>Choose...</option>
              <option>Title</option>
              <option>Author</option>
              <option>Publisher</option>
            </select>
          </div>
          <form>
            <div className="form-group title-input">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="textBox"
                placeholder="Enter Title"
                value={this.props.title}
                onChange={this.handleTitleChange}
              />
              <button
                type="submit"
                className={this.props.buttonClass}
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    } else if (this.props.selected === "Author") {
      return (
        <div className="author-container">
          <div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              value={this.props.selected}
              onChange={this.handleChange}
            >
              <option>Choose...</option>
              <option>Title</option>
              <option>Author</option>
              <option>Publisher</option>
            </select>
          </div>
          <form>
            <div className="form-group author-input">
              <label htmlFor="exampleInputEmail1">Author</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="textBox"
                placeholder="Enter Author"
                value={this.props.author}
                onChange={this.handleAuthorChange}
              />
              <button
                type="submit"
                className={this.props.buttonClass}
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    } else if (this.props.selected === "Publisher") {
      return (
        <div className="publisher-container">
          <div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              value={this.props.selected}
              onChange={this.handleChange}
            >
              <option>Choose...</option>
              <option>Title</option>
              <option>Author</option>
              <option>Publisher</option>
            </select>
          </div>
          <form>
            <div className="form-group publisher-input">
              <label htmlFor="exampleInputEmail1">Publisher</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="textBox"
                placeholder="Enter Publisher"
                value={this.props.publisher}
                onChange={this.handlePublisherChange}
              />
              <button
                type="button"
                className={this.props.buttonClass}
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
export default Searchbar;
