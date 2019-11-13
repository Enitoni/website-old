import { Technology } from "../types/Technology"
import styled from "../../theming/custom"
import React, { cloneElement } from "react"
import { getFontColor } from "../../theming/helpers"

export type TechnologyListItemProps = {
  technology: Technology
}

const Container = styled.div`
  display: flex;

  & + & {
    margin-top: 16px;
  }
`

const Name = styled.a`
  margin-left: 16px;
  font-size: 1.1em;

  color: ${getFontColor("normal")};

  &:hover {
    text-decoration: underline;
  }
`

export function TechnologyListItem(props: TechnologyListItemProps) {
  const { technology } = props
  const { name, icon, link } = technology

  return (
    <Container>
      {cloneElement(icon, {
        width: 24,
        height: 24,
      })}
      <Name target="_blank" rel="noopener noreferrer" href={link}>
        {name}
      </Name>
    </Container>
  )
}
