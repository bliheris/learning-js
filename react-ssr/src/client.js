import React from 'react'
import ReactDOM from 'react-dom'
import Gists from './gists'

ReactDOM.render(<Gists gists={window.gists} />, document.getElementById('app'))