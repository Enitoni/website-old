import { Project } from "../../types/Project"
import styled from "../../../theming/custom"
import React from "react"
import { Link } from "./Link"
import { ButtonList } from "../../../../common/button/components/ButtonList"

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
  margin-left: 64px;
`

export function Body(props: BodyProps) {
  const { project } = props

  return (
    <Container>
      <Description>{project.longDescription}</Description>
      <Sidebar>
        <ButtonList>
          {project.links.map(link => (
            <Link link={link} key={link.type} />
          ))}
        </ButtonList>
      </Sidebar>
    </Container>
  )
}
