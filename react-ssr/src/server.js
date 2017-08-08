import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import fetch from 'isomorphic-fetch'

//import App from './app'
import Gists from './gists'
import template from './template'
import gistsTemplate from './gists-template'


const app = express()

app.use(express.static('dist/public'))

// app.get('/', (req, res) => {
// 	const body = ReactDOM.renderToString(<App />)
// 	const html = template(body)
// 	res.send(html)
// })

app.get('/', (req, res) => {
	fetch('https://api.github.com/users/gaearon/gists')
		.then(response => response.json())
		.then(gists => {
			const body = ReactDOM.renderToString(<Gists gists={gists} />)
			const html = gistsTemplate(body, gists)

			res.send(html)
		})
})

app.listen(3000, () => {
	console.log('Listening on port 3000')
})