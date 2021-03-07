import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const CardStyles = styled.article`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  /* align-items: center; */
  border: 1px solid var(--color-grey--light);
  text-align: center;
  /* background-color: var(--color-grey); */
  a {
    /* color: var(--color-white); */
    text-decoration: none;
    &:focus,
    &:hover {
      text-decoration: underline;
      /* background-color: var(--color-primary); */
      /* color: var(--color-white); */
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    margin: 0;
    padding: 1rem;
  }
`

export default function Card({ cardTitle, cardPath, cardImage }) {
  return (
    <CardStyles>
      <Link to={cardPath}>
        {cardImage && <GatsbyImage image={cardImage} />}
        {cardTitle && <h2>{cardTitle}</h2>}
      </Link>
    </CardStyles>
  )
}
