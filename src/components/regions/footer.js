import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin-top: auto;
  padding: 2rem 0;
  border-top: 1px solid var(--color-grey);
  p {
    margin-bottom: 0;
  }
`

const Footer = () => (
  <FooterStyles>
    <div className="layout-contained padding-horizontal">
      <p>
        Created by <a href="https://mark.ie">Mark Conroy</a>
      </p>
    </div>
  </FooterStyles>
)

export default Footer
