import React from "react"
import Layout from "../components/layout"
import Card from "../components/blogCard"
import injectSheet from 'react-jss'

import "bulma/css/bulma.css"
import globals from "../styles/globals"

export default injectSheet(globals)(({ classes, data }) => {
  return (

      <Layout>

        <div className={classes.section}>
          <div className="container">
            <h1 className="title">Posts</h1>
            <hr/>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

            {data.allMarkdownRemark.edges.map(({ node }) => (

                  <Card node={node}/>

            ))}

          </div>
        </div>


      </Layout>
  )
})

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`