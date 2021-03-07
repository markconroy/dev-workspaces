import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const AddPageStyles = styled.article`
  ul {
    margin-bottom: 3rem;
  }
`

export default function AddPage() {
  //
  return (
    <>
      <Layout>
        <SEO title="Mark Conroy, Drupal and GatsbyJS" />
        <AddPageStyles className="layout-contained padding-horizontal">
          <h1>Add Your Workspace</h1>
          <p>
            To add your workspace to this website, simply{' '}
            <a href="https://github.com/markconroy/dev-workspaces">
              open a PR on GitHub
            </a>
            against the <code>main</code> branch. Some notes:
          </p>
          <ul>
            <li>
              Create your workspace markdown file in{' '}
              <code>/src/workspaces</code>
            </li>
            <li>
              Follow this naming convention for your folder{' '}
              <code>YYYY-MM-DD-your-name</code>
            </li>
            <li>
              Follow this naming convention for your image{' '}
              <code>YYYY-MM-DD-your-name</code> (same as name of folder)
            </li>
          </ul>
          <p>
            Everything is saved in markdown frontmatter. Here are the options
            available:
          </p>
          <ul>
            <li>
              <code>title</code> (your name, e.g. <code>Mark Conroy</code>)
            </li>
            <li>
              <code>image</code> (name of image, e.g.
              <code>2021-03-05-mark-conroy.jpe</code>g
            </li>
            <li>
              <code>like</code> (what you like about your workspace)
            </li>
            <li>
              <code>change</code> (what you might like to change about your
              workspace)
            </li>
            <li>
              <code>blog</code> (address of your blog, e.g.
              <code>https://mark.ie/blog</code>)
            </li>
            <li>
              <code>github</code> (your GitHub username, e.g.{' '}
              <code>markconroy</code>)
            </li>
            <li>
              <code>twitter</code> (your Twitter username, e.g.{' '}
              <code>markconroy</code>)
            </li>
            <li>
              <code>instagram</code>( your Instagram username, e.g.{' '}
              <code>markyconroy</code>)
            </li>
          </ul>
        </AddPageStyles>
      </Layout>
    </>
  )
}
