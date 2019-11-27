import contacts from "../contacts"
import styled from "../../theming/custom"
import React from "react"
import { ContactGridItem } from "./ContactGridItem"

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
`

export function ContactGrid() {
  return (
    <Container>
      {contacts.map(c => (
        <ContactGridItem key={c.name} contact={c} />
      ))}
    </Container>
  )
}
