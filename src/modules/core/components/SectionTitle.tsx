import styled from "../../theming/custom"
import { Card } from "./Card"
import React from "react"
import { getFontColor } from "../../theming/helpers"

export type SectionTitleProps = {
  className?: string
  title: string
}

const Container = styled(Card)`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;

  &:after {
    content: "";
    display: block;

    height: 2px;
    background: ${getFontColor("normal")};

    margin-left: 16px;
    flex: 1;
  }
`

export function SectionTitle(props: SectionTitleProps) {
  return <Container className={props.className}>{props.title}</Container>
}
