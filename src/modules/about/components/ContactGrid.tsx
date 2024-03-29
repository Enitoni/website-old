import contacts from "../contacts"
import styled from "../../theming/custom"
import React from "react"
import { ContactGridItem } from "./ContactGridItem"

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 97px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 17px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  @media (max-width: 340px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
  }
`

export function ContactGrid() {
  return (
    <Container>
      {contacts.map((c) => (
        <ContactGridItem key={c.name} contact={c} />
      ))}
    </Container>
  )
}
