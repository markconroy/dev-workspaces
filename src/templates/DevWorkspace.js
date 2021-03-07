import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const ArticleStyles = styled.article`
  a {
    color: var(--color-secondary);
  }
  * + h2 {
    margin-top: 4rem;
  }
`

export default function SinglePage({ data }) {
  const { devWorkspace } = data
  const {
    title,
    image,
    like,
    change,
    blog,
    github,
    twitter,
    instagram,
  } = devWorkspace.frontmatter
  return (
    <>
      <Layout>
        <SEO
          title={`${title}'s Developer Workspace`}
          metaImageSource={`${data.site.siteMetadata.siteUrl}${devWorkspace.frontmatter.image.publicURL}`}
          description={`View ${title}'s Developer Workspace, and get inspiration for your own`}
        />
        <div className="layout-contained layout-contained--large padding-horizontal">
          <ArticleStyles>
            <h1>{`${devWorkspace.frontmatter.title}'s Workspace`}</h1>
            {devWorkspace.frontmatter.image && (
              <>
                <GatsbyImage
                  image={image.childImageSharp.gatsbyImageData}
                  alt={`${devWorkspace.frontmatter.title}'s Developer Workspace`}
                />
              </>
            )}
            {like && (
              <>
                <h2>What do you like about it?</h2>
                <p>{like}</p>
              </>
            )}

            {change && (
              <>
                <h2>What would you change about it?</h2>
                <p>{change}</p>
              </>
            )}

            {blog || github || twitter || instagram ? (
              <>
                <h2>Connect with {title}</h2>
                <ul>
                  {blog && (
                    <li>
                      <a href={blog}>Blog</a>
                    </li>
                  )}
                  {github && (
                    <li>
                      <a href={`https://github.com/${github}`}>GitHub</a>
                    </li>
                  )}
                  {twitter && (
                    <li>
                      <a href={`https://twitter.com/${twitter}`}>Twitter</a>
                    </li>
                  )}
                  {instagram && (
                    <li>
                      <a href={`https://instagram.com/${instagram}`}>
                        Instagram
                      </a>
                    </li>
                  )}
                </ul>
              </>
            ) : null}
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
        blog
        github
        twitter
        instagram
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 700)
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
