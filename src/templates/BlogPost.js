import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Template = ({ data }) => {
  const post = data.markdownRemark
  const postData = post.frontmatter

  useEffect(() => {
    if (document) {
      document.title = `${postData.title} | HUBCAP Guides`
    }
  }, [postData.title])

  return (
    <Layout>
      <div className="blog-post">
        <Link to="/" className="blog-post__back">
          Go Back
        </Link>
        <hr />
        <h1 className="blog-post__title">{postData.title}</h1>
        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
        guideNo
      }
    }
  }
`

export default Template
