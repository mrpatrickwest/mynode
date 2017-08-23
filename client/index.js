/* 
    ./client/index.js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Timer from './Timer.jsx'
import Books from './Books.jsx'

ReactDOM.render(<App name="Patrick" />, document.getElementById('root'))

ReactDOM.render(<Timer />, document.getElementById('timer'))

fetch('http://localhost:3000/something?', {
  method: 'get',
  headers: {
    Accept: 'application/json',
  },
}) // returns a promise object
  .then(result => result.json()) // still returns a promise object, U need to chain it again
  .then(books => ReactDOM.render(<Books items={books} />, document.getElementById('books')))
