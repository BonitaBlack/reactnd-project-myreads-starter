import React, {Component} from 'react'
import Changer from "./Changer";

class Book extends Component
{
  state = {
    shelfSelection: this.props.book.shelf || "none"
  }
    render()
    {
      const authors = this.props.book.authors && this
          .props
          .book
          .authors
          .join(' | ');
      let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

      return (

          <div className="book">
            <div className="book-top">
            <button
              className="book-cover-button">
              <div className="book-cover"
                  style={{
                  width: 128,
                  height: 193,
                  backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
                  }}></div>
                  </button>
                  <Changer/>
              </div>
              <div className="book-title">1776</div>
              <div className="book-authors">David McCullough</div>
            </div>

      )
    }
}
export default Book;
