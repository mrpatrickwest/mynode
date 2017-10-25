import React from 'react'

export default class User extends React.Component {
  render() {
    return (
      <li className="user" key={this.props.index}>
        <span className="user-uri">{this.props.item.s.value}</span>
      </li>
    )
  }
}
