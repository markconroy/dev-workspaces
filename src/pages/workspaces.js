import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import SEO from '../components/seo'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/layout'
import {
  CardListContainer,
  CardListItem,
} from '../components/list-types/card-list'
import Card from '../components/display-types/card'

export default function WorkSpacesListingPage({ data }) {
  const workspaces = data.workspaces.edges
  return (
    <>
      <GlobalStyles />
      <Layout>
        <SEO title="Developer Workspaces Images and Descriptions" />
        <div className="layout-contained layout-contained--large padding-horizontal">
          <h1>Workspaces</h1>
          <CardListContainer>
            {workspaces.map(workspace => (
              <>
                <CardListItem
                  cardListItemKey={`list-item-${workspace.node.id}`}
                >
                  <Card
                    cardImage={
                      workspace.node.frontmatter.image
                        ? workspace.node.frontmatter.image.childImageSharp
                            .gatsbyImageData
                        : ''
                    }
                    cardTitle={
                      workspace.node.frontmatter
                        ? workspace.node.frontmatter.title
                        : ''
                    }
                    cardPath={`/workspaces/${workspace.node.id}`}
                  />
                </CardListItem>
              </>
            ))}
          </CardListContainer>
        </div>
      </Layout>
    </>
  )
}

export const WorkSpacesQuery = graphql`
  query WorkSpacesListingQuery {
    workspaces: allMarkdownRemark(
      sort: { fields: frontmatter___image___name, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  width: 600
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`
