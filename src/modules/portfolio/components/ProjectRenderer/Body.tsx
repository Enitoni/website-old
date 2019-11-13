import { Project } from "../../types/Project"
import styled from "../../../theming/custom"
import React from "react"

export type BodyProps = {
  project: Project
}

export const Container = styled.div`
  display: flex;
`

const Description = styled.div``

export function Body(props: BodyProps) {
  const { project } = props

  return (
    <Container>
      <Description>{project.longDescription}</Description>
    </Container>
  )
}
