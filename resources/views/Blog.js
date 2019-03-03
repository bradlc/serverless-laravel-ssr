import { h } from 'preact'

let Blog = ({ articles }) => (
  <div>
    <h1>Blog</h1>
    <ul>
      {articles.map(article => (
        <li>{article.title}</li>
      ))}
    </ul>
  </div>
)

export default Blog
