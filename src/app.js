import { h, Component } from 'preact'
import Home from '../resources/views/Home.js'
import About from '../resources/views/About.js'
import Blog from '../resources/views/Blog.js'

let components = {
  Home,
  About,
  Blog
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = props

    this.handleClick = this.handleClick.bind(this)
    this.handlePopState = this.handlePopState.bind(this)
  }
  handleClick(e) {
    let link = e.target.closest('a')
    if (!link) return
    e.preventDefault()
    get(link.href).then(data => {
      window.history.pushState({ path: link.pathname }, '', link.pathname)
      this.setState(data)
    })
  }
  handlePopState(e) {
    if (!e.state.path) return
    get(e.state.path).then(data => {
      this.setState(data)
    })
  }
  componentDidMount() {
    window.history.replaceState(
      { path: window.location.pathname },
      null,
      document.URL
    )
    window.addEventListener('popstate', this.handlePopState)
    window.addEventListener('click', this.handleClick)
  }
  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState)
    window.removeEventListener('click', this.handleClick)
  }
  render({}, { component, props }) {
    let Component = components[component]
    return (
      <div id="app">
        <a href="/">Home</a> <a href="/about">About</a> <a href="/blog">Blog</a>
        <Component {...props} />
      </div>
    )
  }
}

function get(url) {
  return window
    .fetch(url + '?__json', {
      headers: { 'x-requested-with': 'XMLHttpRequest' }
    })
    .then(res => res.json())
}
