import { Project } from "../../types/Project"
import styled from "../../../theming/custom"
import React from "react"
import { Link } from "./Link"
import { ButtonList } from "../../../../common/button/components/ButtonList"
import { SidebarSection } from "./SidebarSection"
import { TechnologyListItem } from "../TechnologyListItem"

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

const Actions = styled(ButtonList)`
  margin-bottom: 32px;
`

export function Body(props: BodyProps) {
  const { project } = props

  return (
    <Container>
      <Description>{project.longDescription}</Description>
      <Sidebar>
        <Actions>
          {project.links.map(link => (
            <Link link={link} key={link.type} />
          ))}
        </Actions>
        <SidebarSection title="Stack" icon="box">
          {project.stack.map(tech => (
            <TechnologyListItem technology={tech} key={tech.name} />
          ))}
        </SidebarSection>
      </Sidebar>
    </Container>
  )
}
