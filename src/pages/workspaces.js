import React from 'react'
import { graphql } from "gatsby";
import styled from 'styled-components'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/layout'

export default function WorkSpacesListingPage ({data}) {
  const workspaces = data.allGoogleSheetDevWorkspacesRow.edges
  return (

    <>
    <GlobalStyles />
      <Layout>
    <SEO title="Developer Workspaces Images and Descriptions" />
        <div className="layout-contained layout-contained--large padding-horizontal">
          <h1>Workspaces</h1>
          {workspaces.map(workspace => {
            return (
              <>
              <p>below</p>
              <Link to={`/${workspace.node.id}`}>Workspace {workspace.node.id}</Link>
              <p>above</p>
              </>
            )
          })}
          <p>I hope you like this</p>
        </div>
      </Layout>
  </>
  )
}


// export const WorkSpacesQuery = graphql`
//   query WorkSpacesListingQuery {
//     workspaces: allGoogleSheetDevWorkspacesRow {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  {
    allGoogleSheetDevWorkspacesRow {
      edges {
        node {
          id
        }
      }
    }
  }
`