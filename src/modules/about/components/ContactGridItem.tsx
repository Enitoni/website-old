import { Contact } from "../types/Contact"
import styled from "../../theming/custom"
import React, { cloneElement } from "react"
import { cover } from "polished"
import { getFontColor } from "../../theming/helpers"

export type ContactGridItemProps = {
  contact: Contact
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconContainer = styled.a`
  display: block;

  padding-bottom: 80%;
  width: 100%;
  height: 0px;

  position: relative;
`

const Icon = styled.div`
  ${cover(32)}
`

const Name = styled.a`
  font-size: 1em;
  font-weight: 600;

  color: ${getFontColor("normal")};
`

export function ContactGridItem(props: ContactGridItemProps) {
  const { name, link, icon } = props.contact

  return (
    <Container>
      <IconContainer href={link} target="_black" rel="noopener noreferrer">
        <Icon>
          {cloneElement(icon, {
            style: {
              width: "100%",
              height: "100%",
            },
          })}
        </Icon>
      </IconContainer>
      <Name href={link} target="_black" rel="noopener noreferrer">
        {name}
      </Name>
    </Container>
  )
}
