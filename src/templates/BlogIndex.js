import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/BlogLayout"
import SEO from "../components/seo"
import PostCard from "../components/BlogPostCard"
import Paginator from "../components/paginator"

import "../styles/style.css"

const BlogIndexTemplate = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout title={siteTitle}>
      <SEO title="Posts" />
      {posts.map(({ node }) =>
        <PostCard
          key={node.fields.slug}
          node={node}
          postClass="post"
        />
      )}
      <Paginator pageContext={pageContext} />
    </Layout>
  )
}

export default BlogIndexTemplate

export const pageQuery = graphql`
  query BlogIndexByIndex($index: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 5, skip: $index) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            tags
            description
          }
        }
      }
    }
  }
`
