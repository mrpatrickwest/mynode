import React from 'react'

export default class Books extends React.Component {
  render() {
    return React.createElement(
      'div',
      { style: { textAlign: 'left' } },
      React.createElement(
        'ul',
        null,
        this.props.items.books.map(function(book, index) {
          return (
            <li key={index}>
              <span style={{ fontStyle: 'italic' }}>{book.title}</span> by {book.author}
            </li>
          )
        })
      )
    )
  }
}
