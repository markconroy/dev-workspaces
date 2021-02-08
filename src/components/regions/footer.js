import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin-top: auto;
  padding: 1rem 0;
  background-color: var(--color-primary);
  a {
    color: var(--color-white);
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
  }
  li {
    list-style-type: none;
    margin: .5rem;
  }
`

const Footer = () => (
  <FooterStyles>
    <div className="layout-contained padding-horizontal">
      <ul style={{ margin: 0 }}>
        <li>
          <Link to="/cookie-policy">Cookies</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </FooterStyles>
)

export default Footer
