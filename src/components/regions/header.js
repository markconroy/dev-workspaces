import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import MenuStyles from '../menu'
import MenuItems from '../menu-items'

const HeaderStyles = styled.header`
  margin-bottom: 2rem;
  padding: 1rem 0;
  background-color: var(--color-primary);
`

const Logo = styled.p`
  margin: 0;
  padding-top: .5rem;
  display: flex;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  a {
    color: var(--color-white);
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
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div className="layout-contained padding-horizontal">
      <HeaderInnerStyles>
        <Logo>
          <Link to="/">{siteTitle}</Link>
        </Logo>
        <MenuStyles>
          <MenuItems />
        </MenuStyles>
      </HeaderInnerStyles>
    </div>
  </HeaderStyles>
)

export default Header
