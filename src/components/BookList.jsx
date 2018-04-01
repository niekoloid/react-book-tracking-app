import React from 'react';
import styled from 'styled-components'

class BookList extends React.Component {
  render() {

    const books = this.props.books

    return(
      <ol>
      {books.map(book => (<li key={book.title}>{book.title}</li>))}
      </ol>
    )

  }
}

export default BookList
