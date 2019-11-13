import { Project } from "../../types/Project"
import styled from "../../../theming/custom"
import React from "react"

export type HeaderProps = {
  project: Project
}

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2em;
  font-weight: 500;
`

export function Header(props: HeaderProps) {
  const { project } = props

  return (
    <Container>
      <Title>{project.name}</Title>
    </Container>
  )
}
