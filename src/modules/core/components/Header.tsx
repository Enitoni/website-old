import styled from "../../theming/custom"
import { CONTENT_WIDTH, HEADER_HEIGHT } from "../constants"
import { getColor, getShadow } from "../../theming/helpers"
import React from "react"
import { HeaderLink } from "./HeaderLink"

const Container = styled.div`
  position: fixed;

  top: 32px;
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

  backdrop-filter: blur(15px);
  box-shadow: ${getShadow("light")};
`

const Nav = styled.nav`
  display: flex;
`

export function Header() {
  return (
    <Container>
      <Content>
        <Nav>
          <HeaderLink to="/" label="Home" icon="home" />
          <HeaderLink to="/about" label="About" icon="book" />
          <HeaderLink to="/contact" label="Contact me" icon="mail" />
        </Nav>
      </Content>
    </Container>
  )
}
