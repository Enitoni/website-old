import styled from "../../theming/custom"
import { Card } from "../../core/components/Card"
import { size } from "polished"
import { getColor } from "../../theming/helpers"
import React from "react"

const Container = styled(Card)`
  display: flex;

  padding: 64px;
`

const Info = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-stroke: ;
`

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1em;
`

const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 400;
`

const Avatar = styled.img`
  border-radius: 100%;
  border: solid 4px ${getColor("primary")};

  ${size(155)};
`

export function LandingBlurb() {
  return (
    <Container>
      <Info>
        <Title>Hi, I'm Seb</Title>
        <Subtitle>I'm a full-stack web developer.</Subtitle>
      </Info>
    </Container>
  )
}
