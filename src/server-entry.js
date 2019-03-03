import render from 'preact-render-to-string'
import { h } from 'preact'
import App from './app.js'

let layout = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Hello world</title>
      <link rel="preload" as="fetch" href="?__json">
    </head>
    <body>
      {{app}}
      <script src="assets/app.umd.js"></script>
    </body>
  </html>
`

export default function renderApp(props) {
  return layout
    .replace('{{app}}', render(<App {...props} />))
}
