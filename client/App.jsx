/*
    ./client/components/App.jsx
*/
import React from 'react'

export default class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      { style: { textAlign: 'center' } },
      React.createElement('h1', null, 'Hello ', this.props.name)
    )
  }
}
