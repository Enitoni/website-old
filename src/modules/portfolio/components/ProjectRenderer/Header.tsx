import { Project } from "../../types/Project"
import styled from "../../../theming/custom"
import React from "react"
import { Button } from "../../../../common/button/components/Button"
import { size } from "polished"
import { useStores } from "../../../../common/state/hooks/useStores"

export type HeaderProps = {
  project: Project
}

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;

  margin-bottom: 16px;
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

  margin-left: -${48 + 32}px;
  margin-right: 32px;

  @media (max-width: 1355px) {
    margin-left: 0px;
    margin-right: 16px;

    ${size(38)}px;

    > .icon {
      ${size(38)}px;
    }
  }
`

const Title = styled.h1`
  font-size: 2em;
  font-weight: 500;
`

export function Header(props: HeaderProps) {
  const { selectedProjectStore } = useStores()
  const { project } = props

  return (
    <Container>
      <CloseButton
        icon="circledX"
        onClick={() => (selectedProjectStore.selected = undefined)}
      />
      <Title>{project.name}</Title>
    </Container>
  )
}
