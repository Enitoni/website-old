import { PropsWithChildren } from "react"
import styled from "../../../theming/custom"
import React from "react"
import { SVGIcon } from "../../../../common/icons/components/SVGIcon"
import { size } from "polished"
import { IconType } from "../../../../common/icons/types/IconType"
import { getFontColor } from "../../../theming/helpers"

export type SidebarSectionProps = PropsWithChildren<{
  title: string
  icon: IconType
}>

const Container = styled.div`
  & ~ & {
    margin-top: 32px;
  }
`

const Header = styled.div`
  display: flex;

  border-bottom: solid 2px ${getFontColor("normal")};
  padding-bottom: 8px;
  margin-bottom: 16px;
`

const Icon = styled(SVGIcon)`
  ${size(24)};
`

const Title = styled.span`
  margin-left: 8px;

  font-weight: 600;
  text-transform: uppercase;
`

export function SidebarSection(props: SidebarSectionProps) {
  const { title, icon, children } = props

  return (
    <Container>
      <Header>
        <Icon name={icon} />
        <Title> {title} </Title>
      </Header>
      {children}
    </Container>
  )
}
