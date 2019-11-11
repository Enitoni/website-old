import styled from "../../theming/custom"
import React from "react"

import { HEADER_HEIGHT, CONTENT_WIDTH } from "../constants"
import { PropsWithChildren } from "react"
import { Card } from "./Card"

const Container = styled.main`
  margin-top: ${parseInt(HEADER_HEIGHT) + 64}px;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: ${CONTENT_WIDTH};
`

export function Body(props: PropsWithChildren<{}>) {
  return (
    <Container>
      <Content></Content>
    </Container>
  )
}
