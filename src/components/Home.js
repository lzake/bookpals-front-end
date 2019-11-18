import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="intro-container">
          <h6>
            Welcome to Book Pals! This site is designed for avid book readers
            and learners alike. This collection of books is designed so that you
            can add books that you love to our database. Whether you're looking
            for the next business book or the perfect thriller checkout what our
            users are reading right now!
          </h6>
        </div>
        <div className="home-cover-container">
          <img
            src="http://covers.openlibrary.org/b/isbn/9780062273123-L.jpg"
            className="d-block "
            alt="..."
          />

          <img
            src="http://covers.openlibrary.org/b/isbn/9780062857699-L.jpg"
            className="d-block"
            alt="..."
          />
          <img
            src="http://covers.openlibrary.org/b/isbn/9780786867301-L.jpg"
            className="d-block"
            alt="..."
          />
        </div>

        <div className="quote-container">
          <p className="quote">
            “The more that you read, the more things you will know. The more
            that you learn, the more places you’ll go.” – Dr. Seuss
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
