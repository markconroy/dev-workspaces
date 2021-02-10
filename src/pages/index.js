import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import GlobalStyles from '../styles/GlobalStyles'
import Menu from '../components/menu'

const MainStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-wrap: wrap;
  text-align: center;
  line-height: 2;
  > * {
    width: 100%;
  }
`

const HomePage = () => (
  <>
    <GlobalStyles />
    <SEO title="Mark Conroy, Drupal and GatsbyJS" />
    <div className="layout-contained layout-contained--small padding-horizontal">
      <MainStyles>
        <div>
          <h1>Welcome to devWorkspaces</h1>

          <Menu />
        </div>
      </MainStyles>
    </div>
  </>
)

export default HomePage
