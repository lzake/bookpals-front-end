import React, { Component } from "react";
import "./Home.css";
import bookImage from "./—Pngtree—open book_5054230.png";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-container">
          <div className="Home-paragraph-container">
            <img className="Home-image" src={bookImage} alt="" />
            <p className="Home-paragraph">
              <strong>Welcome to Book Pals!</strong> <br /> Whether you've been
              looking for a new and interesting book to read or you want to
              share your latest find, Book Pals is for you. A site designed for
              bookworms and avid readers, Book Pals' collection contains all
              types of books. Please feel free to add any of your favorites!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
