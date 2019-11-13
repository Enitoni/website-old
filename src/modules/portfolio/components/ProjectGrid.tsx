import styled from "styled-components"
import entries from "../entries"
import React from "react"
import { ProjectGridItem } from "./ProjectGridItem"

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
`

export function ProjectGrid() {
  return (
    <Container>
      {entries.map(entry => (
        <ProjectGridItem key={entry.name} entry={entry} />
      ))}
    </Container>
  )
}
