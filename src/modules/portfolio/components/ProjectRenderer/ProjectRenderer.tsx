import styled from "../../../theming/custom"
import { Project } from "../../types/Project"
import { getColor } from "../../../theming/helpers"
import React from "react"
import { CONTENT_WIDTH } from "../../../core/constants"

export type ProjectRendererProps = {
  project: Project
}

const Overlay = styled.div`
  position: fixed;
  z-index: 10;

  top: 0px;
  right: 0px;
  left: 0px;
  min-height: 100vh;

  background: ${getColor("primary")};
  backdrop-filter: blur(20px);

  overflow-y: scroll;

  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: ${CONTENT_WIDTH};
  padding-top: 64px;
`

export function ProjectRenderer(props: ProjectRendererProps) {
  const { project } = props

  return (
    <Overlay>
      <Container></Container>
    </Overlay>
  )
}
