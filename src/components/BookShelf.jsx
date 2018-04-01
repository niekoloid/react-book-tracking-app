import React from 'react'
import styled from 'styled-components'
import BookList from './BookList'

class BookShelf extends React.Component {
  render() {

    const titleShelf = this.props.title
    const books = this.props.books

    return(
      <div className="bookshelf">
      <h2 className="bookshelf-title">{titleShelf}</h2>
      <ol>
        {books.map(book => (<li key={book.title}>{book.title}</li>))}
      </ol>
      </div>
    )

  }
}

export default BookShelf
