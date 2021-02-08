import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CardStyles = styled.article`
  a {
    color: var(--color-grey--darker);
    text-decoration: none;
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`

export default function Card({ cardTitle, cardPath, cardCreated }) {
  return (
    <CardStyles>
      <Link to={cardPath}>
        {cardTitle && <h2>{cardTitle}</h2>}
        {cardCreated && <p>{cardCreated}</p>}
        {cardPath}
      </Link>
    </CardStyles>
  )
}
