import React from 'react'

export default class Book extends React.Component {
  render() {
    return (
      <li className="book" key={this.props.index}>
        <span className="book-title">{this.props.item.title}</span> by{' '}
        <span className="book-author">{this.props.item.author}</span>
      </li>
    )
  }
}
