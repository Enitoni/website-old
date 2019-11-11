import styled from "styled-components"
import entries from "../entries"
import React from "react"
import { PortfolioGridItem } from "./PortfolioGridItem"

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
`

export function PortfolioGrid() {
  return (
    <Container>
      {entries.map(entry => (
        <PortfolioGridItem key={entry.name} entry={entry} />
      ))}
    </Container>
  )
}
