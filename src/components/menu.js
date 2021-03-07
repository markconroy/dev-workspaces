import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const MenuStyles = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  li {
    list-style: none;
  }
  li + li {
    margin-left: 1rem;
  }
  .menu-link {
    /* color: var(--color-white); */
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: inline-block;
  }
  .menu-link:focus,
  .menu-link:hover {
    text-decoration: underline;
  }
  .menu-link--active {
    /* border-top: 2px solid var(--color-white); */
    ${props =>
      props.isPartiallyCurrent &&
      css`
        /* border-top: 2px solid var(--color-white); */
      `}
  }
`

export default function Menu() {
  return (
    <>
      <MenuStyles>
        <li>
          <Link
            className="menu-link"
            activeClassName="menu-link--active"
            to="/workspaces"
            partiallyActive
          >
            All Workspaces
          </Link>
        </li>
        <li>
          <Link
            className="menu-link"
            activeClassName="menu-link--active"
            to="/add"
            partiallyActive
          >
            Add Yours
          </Link>
        </li>
      </MenuStyles>
    </>
  )
}
