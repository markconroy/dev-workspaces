import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Menu from '../menu'

const HeaderStyles = styled.header`
  padding: 3rem 0;
`

const Logo = styled.p`
  margin: 0;
  display: flex;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  a {
    color: var(--color-black);
    font-weight: bold;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

const HeaderInnerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div className="layout-contained padding-horizontal">
      <HeaderInnerStyles>
        <Logo>
          <Link to="/">{siteTitle}</Link>
        </Logo>
        <Menu />
      </HeaderInnerStyles>
    </div>
  </HeaderStyles>
)

export default Header
