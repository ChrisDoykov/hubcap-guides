import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Template = ({ data }) => {
  const post = data.markdownRemark
  const postData = post.frontmatter

  return (
    <Layout>
      <div>
        <Link to="/blog">Go Back</Link>
        <hr />
        <h1>{postData.title}</h1>
        <h4>
          Posted by {postData.author} on {postData.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template
