import styled, { keyframes, css } from "../../../theming/custom"
import { Project } from "../../types/Project"
import { getColor } from "../../../theming/helpers"
import React from "react"
import { CONTENT_WIDTH } from "../../../core/constants"
import { Button } from "../../../../common/button/components/Button"
import { size } from "polished"
import { useStores } from "../../../../common/state/hooks/useStores"
import { Header } from "./Header"
import { Body } from "./Body"
import { TransitionStatus } from "react-transition-group/Transition"
import { ImageRenderer } from "../../../../common/dom/components/ImageRenderer"
import { ImageSlideshow } from "../../../../common/dom/components/ImageSlideshow"

export type ProjectRendererProps = {
  project: Project
  status: TransitionStatus
}

const Animation = keyframes`
  0% {
    transform: translateY(100vh) translateZ(0);
  }

  100% {
    transform: translateY(0vh) translateZ(0);
  }
`

const Overlay = styled.div<{ status: TransitionStatus }>`
  position: fixed;
  z-index: 10;

  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;

  background: ${getColor("primaryFallback")};
  transition: 500ms ease transform;

  @supports (backdrop-filter: blur(20px)) {
    background: ${getColor("primary")};
    backdrop-filter: blur(20px);
  }

  overflow-y: scroll;

  display: flex;
  justify-content: center;

  ${props => {
    const { status } = props

    if (status === "entering")
      return css`
        animation: ${Animation} ease 500ms;
        animation-fill-mode: forwards;
      `

    if (status === "exiting")
      return css`
        animation: ${Animation} ease 500ms reverse;
        animation-fill-mode: forwards;
      `
  }}
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

const SlideshowContainer = styled.div`
  margin-bottom: 32px;
`

const Slideshow = styled(ImageSlideshow)`
  width: 100%;
  padding-bottom: ${(9 / 16) * 100}%;
`

export function ProjectRenderer(props: ProjectRendererProps) {
  const { selectedProjectStore } = useStores()
  const { project, status } = props
  const { screenshots = [], key } = project

  const renderSlideshow = () => {
    if (screenshots.length === 0) return

    const entries = screenshots.map((label, i) => ({
      src: `/img/screenshots/${key}/${i + 1}.png`,
      label,
    }))

    return (
      <SlideshowContainer>
        <Slideshow entries={entries} />
      </SlideshowContainer>
    )
  }

  return (
    <Overlay status={status}>
      <Container>
        <CloseButton
          icon="circledX"
          onClick={() => (selectedProjectStore.selected = undefined)}
        />
        <Content>
          <Header project={project} />
          {renderSlideshow()}
          <Body project={project} />
        </Content>
      </Container>
    </Overlay>
  )
}
