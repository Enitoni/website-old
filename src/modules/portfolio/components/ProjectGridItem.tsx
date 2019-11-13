import { Project } from "../types/Project"
import styled from "../../theming/custom"
import { Card } from "../../core/components/Card"
import React, { cloneElement } from "react"
import { cover, transparentize } from "polished"
import { getColor } from "../../theming/helpers"
import { useStores } from "../../../common/state/hooks/useStores"

export type ProjectGridItemProps = {
  entry: Project
}

const Thumbnail = styled.div<{ color: string }>`
  width: 100%;
  padding-bottom: 50%;

  background: ${props => transparentize(0.1, props.color)};
  backdrop-filter: grayscale(100%) blur(20px);

  position: relative;
  transition: 200ms ease background;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const Container = styled(Card)<{ color: string }>`
  padding: 0px;
  position: relative;
  overflow: hidden;

  background: transparent;
  backdrop-filter: none;

  &:hover {
    cursor: pointer;

    ${Thumbnail} {
      background: ${props => props.color};
    }
  }

  &:active {
    transform: translateY(10px);
  }

  transition: 200ms ease transform;
`

const LogoContainer = styled.div`
  ${cover()};

  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  background: ${getColor("primary")};
  backdrop-filter: blur(10px);

  padding: 16px;
  display: flex;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const PrimaryInfo = styled.div``

const Name = styled.h1`
  font-size: 1.2em;
  font-weight: 600;
`

const Description = styled.span`
  font-size: 1em;
`

export function ProjectGridItem(props: ProjectGridItemProps) {
  const { selectedProjectStore } = useStores()

  const { entry } = props
  const { name, icon, shortDescription, theme } = entry

  const handleClick = () => {
    selectedProjectStore.selected = entry
  }

  return (
    <Container onClick={handleClick} color={theme.primary}>
      <Thumbnail color={theme.primary}>
        <LogoContainer>
          {cloneElement(icon as any, {
            width: 96,
            height: 96,
          })}
        </LogoContainer>
      </Thumbnail>
      <Content>
        <PrimaryInfo>
          <Name>{name}</Name>
          <Description>{shortDescription}</Description>
        </PrimaryInfo>
      </Content>
    </Container>
  )
}
