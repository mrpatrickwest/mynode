import React from 'react'
import Book from './Book.jsx'

export default class Books extends React.Component {
  render() {
    return React.createElement(
      'div',
      { style: { textAlign: 'left' } },
      React.createElement(
        'ul',
        null,
        this.props.items.books.map(function(book, index) {
          return <Book item={book} key={index} />
        })
      )
    )
  }
}
