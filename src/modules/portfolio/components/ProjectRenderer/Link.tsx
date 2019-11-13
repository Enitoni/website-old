import { ProjectLink } from "../../types/Project"
import styled from "../../../theming/custom"
import { getColor } from "../../../theming/helpers"
import { SVGIcon } from "../../../../common/icons/components/SVGIcon"
import { size } from "polished"
import { IconType } from "../../../../common/icons/types/IconType"
import React from "react"

export type LinkProps = {
  link: ProjectLink
}

const Icon = styled(SVGIcon)`
  ${size(24)};

  fill: ${getColor("accent")};
  transition: 200ms ease fill;
`

const Label = styled.span`
  color: ${getColor("accent")};
  margin-left: 16px;

  font-size: 0.9em;
  font-weight: 500;

  text-transform: uppercase;
  transition: 200ms ease color;
`

const Container = styled.a`
  display: flex;
  align-items: center;

  padding: 12px 16px;

  border-radius: 4px;
  border: solid 2px ${getColor("accent")};

  transition: 200ms ease;
  transition-property: background transform;

  &:hover {
    cursor: pointer;
    background: ${getColor("accent")};

    ${Icon} {
      fill: white;
    }

    ${Label} {
      color: white;
    }
  }

  &:active {
    transform: translateY(3px);
  }
`

const linkIconMap: Record<ProjectLink["type"], IconType> = {
  canonical: "home",
  code: "code",
}

const linkLabelMap: Record<ProjectLink["type"], string> = {
  canonical: "View project",
  code: "View code",
}

export function Link(props: LinkProps) {
  const { link } = props

  return (
    <Container href={link.href} target="_blank" rel="noopener noreferrer">
      <Icon name={linkIconMap[link.type]} />
      <Label>{linkLabelMap[link.type]}</Label>
    </Container>
  )
}
