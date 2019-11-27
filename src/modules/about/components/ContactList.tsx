import contacts from "../contacts"
import styled from "../../theming/custom"
import React from "react"
import { ContactListItem } from "./ContactListItem"

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
`

export function ContactList() {
  return (
    <Container>
      {contacts.map(c => (
        <ContactListItem key={c.name} contact={c} />
      ))}
    </Container>
  )
}
