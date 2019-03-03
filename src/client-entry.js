import { h, render } from 'preact'
import App from './app.js'

window
  .fetch('?__json')
  .then(res => res.json())
  .then(data => {
    render(<App {...data} />, document.body, document.body.firstElementChild)
  })
