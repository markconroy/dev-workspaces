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
  return (
    <>
      <Layout>
        <SEO title={data.title} />
        <div class="layout-contained layout-contained--large padding-horizontal">
          <ArticleStyles>
            <h1>{data.title}</h1>
          </ArticleStyles>
        </div>
      </Layout>
    </>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     nodePage(path: { alias: { eq: $slug } }) {
//       id
//       title
//     }
//   }
// `
