import React from "react"
import { IconType } from "../../../common/icons/types/IconType"
import styled from "../../theming/custom"
import { useRouteLink } from "../../../common/routing/hooks/useRouteLink"
import { SVGIcon } from "../../../common/icons/components/SVGIcon"
import { size, opacify } from "polished"
import { HEADER_HEIGHT } from "../constants"

export type HeaderLinkProps = {
  to: string
  label: string
  icon: IconType
}

const Icon = styled(SVGIcon)`
  ${size(24)}

  transition: 200ms ease fill;
`

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;

  margin-top: 3px;
  margin-left: 16px;

  transition: 200ms ease color;

  @media (max-width: 680px) {
    display: none;
  }
`

const Container = styled.a<{ active: boolean }>`
  height: ${HEADER_HEIGHT};

  display: flex;
  align-items: center;

  opacity: 0.5;
  transition: 200ms ease opacity;

  padding: 0px 16px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  ${props =>
    props.active &&
    `
    opacity: 1;

    ${Icon} {
      fill: ${props.theme.colors.accent};
    }

    ${Label} {
      color: ${props.theme.colors.accent};
    }
  `}
`

export function HeaderLink(props: HeaderLinkProps) {
  const { to, label, icon } = props
  const [active, onClick] = useRouteLink(to)

  return (
    <Container active={active} onClick={onClick}>
      <Icon name={icon} />
      <Label>{label}</Label>
    </Container>
  )
}
