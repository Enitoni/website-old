import { Project } from "../../types/Project"
import styled from "../../../theming/custom"
import React from "react"

export type BodyProps = {
  project: Project
}

export const SIDEBAR_WIDTH = "320px"

export const Container = styled.div`
  display: flex;
`

const Description = styled.div`
  flex: 1;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH};
`

export function Body(props: BodyProps) {
  const { project } = props

  return (
    <Container>
      <Description>{project.longDescription}</Description>
      <Sidebar></Sidebar>
    </Container>
  )
}
