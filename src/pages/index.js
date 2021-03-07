import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import GlobalStyles from '../styles/GlobalStyles'
import Card from '../components/display-types/card'

const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  text-align: center;
  line-height: 2;
  > * {
    margin-bottom: 3rem;
  }
  .home-link-to-all {
    display: inline-block;
    padding: 0.5rem 2rem;
    text-decoration: none;
    color: var(--color-white);
    background-color: var(--color-primary);
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`

export default function HomePage({ data }) {
  const workspace = data.workspaces.edges[0].node

  return (
    <>
      <GlobalStyles />
      <SEO title="Mark Conroy, Drupal and GatsbyJS" />
      <div className="layout-contained layout-contained--small padding-horizontal">
        <MainStyles>
          <h1>Welcome to devWorkspaces</h1>
          <p>Show off (or get inspiration for) your workspace.</p>
          <p>Here's the latest workspace.</p>
          <Card
            cardImage={
              workspace.frontmatter.image
                ? workspace.frontmatter.image.childImageSharp.gatsbyImageData
                : ''
            }
            cardTitle={
              workspace.frontmatter.image ? workspace.frontmatter.title : ''
            }
            cardPath={`/workspaces/${workspace.id}`}
          />
          <Link className="home-link-to-all" to="/workspaces">
            See All Workspaces
          </Link>
        </MainStyles>
      </div>
    </>
  )
}

export const HomePageQuery = graphql`
  query HomePageQuery {
    workspaces: allMarkdownRemark(
      sort: { fields: frontmatter___image___name, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
`
