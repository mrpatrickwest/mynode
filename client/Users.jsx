import React from 'react'
import User from './User.jsx'

export default class Users extends React.Component {
  render() {
    console.log(this.props.items.results.bindings)
    return React.createElement(
      'div',
      { style: { textAlign: 'left' } },
      React.createElement(
        'ul',
        null,
        this.props.items.results.bindings.map(function(user, index) {
          return <User item={user} key={index} />
        })
      )
    )
  }
}
