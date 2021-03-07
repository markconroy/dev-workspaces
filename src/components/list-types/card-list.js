import React from 'react'
import styled from 'styled-components'

const CardListContainerStyles = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (min-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    margin-right: -1rem;
    li {
      display: flex;
      width: calc(50% - 2rem);
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`

const CardListItemStyles = styled.li`
  margin-bottom: 3rem;
`

function CardListContainer({ children }) {
  return <CardListContainerStyles>{children}</CardListContainerStyles>
}

function CardListItem({ children, cardListItemKey }) {
  return (
    <CardListItemStyles key={cardListItemKey}>{children}</CardListItemStyles>
  )
}

export { CardListContainer, CardListItem }
