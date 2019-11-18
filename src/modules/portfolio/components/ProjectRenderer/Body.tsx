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
  margin-top: -1em;
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
  const { links, stack, period } = project

  const renderLinks = () => {
    if (links.length === 0) return

    return (
      <Actions>
        {links.map(link => (
          <Link link={link} key={link.type} />
        ))}
      </Actions>
    )
  }

  return (
    <Container>
      <Description>{project.longDescription}</Description>
      <Sidebar>
        {renderLinks()}
        <SidebarSection title="Stack" icon="box">
          {stack.map(tech => (
            <TechnologyListItem technology={tech} key={tech.name} />
          ))}
        </SidebarSection>
        <SidebarSection title="Period" icon="calendar">
          {period[0]} — {period[1]}
        </SidebarSection>
      </Sidebar>
    </Container>
  )
}
