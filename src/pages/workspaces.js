import React from 'react'
import { graphql } from "gatsby";
import styled from 'styled-components'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/layout'

export default function WorkSpacesListingPage ({data}) {
  const workspaces = data.workspaces.edges
  return (

    <>
    <GlobalStyles />
      <Layout>
      <SEO title="Developer Workspaces Images and Descriptions" />
        <div className="layout-contained layout-contained--large padding-horizontal">
          <h1>Workspaces</h1>
          <ul>

          {workspaces.map(workspace => {
            return (
              <>
                <li><Link to={`/${workspace.node.id}`}>Workspace {workspace.node.frontmatter.title}</Link></li>
              </>
            )
          })}
          </ul>
        </div>
      </Layout>
  </>
  )
}


export const WorkSpacesQuery = graphql`
  query WorkSpacesListingQuery {
    workspaces: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`