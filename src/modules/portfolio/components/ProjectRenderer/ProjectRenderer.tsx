import styled from "../../../theming/custom"
import { Project } from "../../types/Project"
import { getColor } from "../../../theming/helpers"
import React from "react"
import { CONTENT_WIDTH } from "../../../core/constants"
import { Button } from "../../../../common/button/components/Button"
import { size } from "polished"
import { useStores } from "../../../../common/state/hooks/useStores"
import { Header } from "./Header"
import { Body } from "./Body"

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

  display: flex;
  align-items: flex-start;
`

const CloseButton = styled(Button)`
  display: block;

  opacity: 0.5;
  ${size(48)};

  transition: 200ms ease;
  transition-property: opacity transform;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: translateY(3px);
  }

  > .icon {
    ${size(48)};
  }
`

const Content = styled.div`
  flex: 1;
  margin-left: 32px;
`

export function ProjectRenderer(props: ProjectRendererProps) {
  const { selectedProjectStore } = useStores()
  const { project } = props

  return (
    <Overlay>
      <Container>
        <CloseButton
          icon="circledX"
          onClick={() => (selectedProjectStore.selected = undefined)}
        />
        <Content>
          <Header project={project} />
          <Body project={project} />
        </Content>
      </Container>
    </Overlay>
  )
}
