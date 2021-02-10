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
  return (
    <>
      <Layout>
        <SEO title={devWorkspace.yourname} />
        <div class="layout-contained layout-contained--large padding-horizontal">
          <ArticleStyles>
            <h1>{`${devWorkspace.yourName}'s Workspace`}</h1>
            <h2>What do you like about it?</h2>
            <p>{devWorkspace.youLike}</p>
            <h2>What would you change about it?</h2>
            <p>{devWorkspace.youCouldChange}</p>
          </ArticleStyles>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    devWorkspace: googleSheetDevWorkspacesRow(id: { eq: $slug }) {
      id
      yourName: yourname
      youLike: whatdoyoulikeaboutthisworkspace
      youCouldChange: isthereanythingyouwouldchangeaboutit
    }
  }
`
