import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Book-container">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.src} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">
                  Description: {this.props.description}
                </p>
                <p className="card-text"> Publisher: {this.props.publisher}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Author: {this.props.author}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Book;
