/* 
    ./client/index.js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Timer from './Timer.jsx'

ReactDOM.render(<App name="Patrick" />, document.getElementById('root'))

ReactDOM.render(<Timer />, document.getElementById('timer'))
