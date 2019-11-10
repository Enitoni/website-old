import styled from "../../theming/custom"
import { CONTENT_WIDTH } from "../constants"
import { getColor, getShadow } from "../../theming/helpers"
import React from "react"

export const HEADER_HEIGHT = "56px"

const Container = styled.div`
  position: fixed;

  top: 16px;
  left: 0px;
  right: 0px;

  display: flex;
  justify-content: center;
`

const Content = styled.header`
  height: ${HEADER_HEIGHT};
  width: ${CONTENT_WIDTH};

  background: ${getColor("primary")};
  border-radius: 3px;

  backdrop-filter: blur(10px);
  box-shadow: ${getShadow("light")};
`

export function Header() {
  return (
    <Container>
      <Content />
    </Container>
  )
}
