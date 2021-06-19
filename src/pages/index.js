import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <div className="blog">
      <h1 className="blog__heading">Guides</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div className="blog__item" key={post.node.id}>
          <Link className="blog__item__link" to={post.node.frontmatter.path}>
            <h3>{post.node.frontmatter.title}</h3>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___guideNo], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            guideNo
          }
        }
      }
    }
  }
`

export default BlogPage
