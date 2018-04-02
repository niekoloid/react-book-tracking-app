import React from 'react'

class BookShelf extends React.Component {
  render() {

    const titleShelf = this.props.title
    const books = this.props.books

    return(
      <div className="bookshelf">
      <h2 className="bookshelf-title">{titleShelf}</h2>
      <ol className="books-grid">
        {books.map(book => (<li key={book.title}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 200, backgroundImage: book.backgroundImage }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>))}
      </ol>
      </div>
    )

  }
}

export default BookShelf
