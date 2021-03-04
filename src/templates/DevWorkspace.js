import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const ArticleStyles = styled.article`
  h1 {
    color: var(--color-primary);
  }
  a {
    color: var(--color-secondary);
  }
`

export default function SinglePage({ data }) {
  const devWorkspace = data.devWorkspace
  const title = devWorkspace.frontmatter.title
  return (
    <>
      <Layout>
        <SEO title={`${title}'s Developer Workspace`} />
        <div className="layout-contained layout-contained--large padding-horizontal">
          <ArticleStyles>
            <h1>{`${devWorkspace.frontmatter.title}'s Workspace`}</h1>
            <h2>What do you like about it?</h2>
            <p>{devWorkspace.frontmatter.like}</p>
            <h2>Image</h2>
            <img src={devWorkspace.imageOfWorkspace} alt={`${title}'s Developer Workspace`} />
            <p>{devWorkspace.youLike}</p>
            <h2>What would you change about it?</h2>
            <p>{devWorkspace.frontmatter.change}</p>

          </ArticleStyles>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    devWorkspace: markdownRemark(id: { eq: $slug }) {
        id
        html
        frontmatter {
          title
          like
          change
        }
    }
  }
`
