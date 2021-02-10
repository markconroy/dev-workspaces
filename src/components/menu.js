import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const MenuStyles = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  li + li {
    margin-left: 1rem;
  }
  .menu-link {
    color: var(--color-white);
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: inline-block;
  }
  .menu-link:focus,
  .menu-link:hover {
    text-decoration: underline;
  }
  .menu-link--active {
    border-top: 2px solid var(--color-white);
    ${props =>
      props.isPartiallyCurrent &&
      css`
        border-top: 2px solid var(--color-white);
      `}
  }
  ${props =>
    props.treated &&
    css`
      ul {
        justify-content: center;
      }
      li {
        margin-bottom: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      li + li {
        margin-left: 0.5rem;
      }
      .menu-link {
        color: var(--color-grey--dark);
        border-bottom: 2px dashed var(--color-grey--dark);
        padding-left: 0;
        padding-right: 0;
      }
      .menu-link:focus {
        border-bottom-style: none;
        text-decoration: underline;
      }
      .menu-link:hover {
        border-bottom-style: solid;
        text-decoration: none;
      }
    `}
`

export default function Menu () {
  return ( 
    <>
    <ul>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/"
          partiallyActive
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/workspaces"
          partiallyActive
        >
          Workspaces
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/contact"
          partiallyActive
        >
          Contact
        </Link>
      </li>
    </ul>
    </>

  )
}
