import React from "react"
import { LandingBlurb } from "./LandingBlurb"
import { SectionTitle } from "../../core/components/SectionTitle"
import styled from "../../theming/custom"

const PortfolioTitle = styled(SectionTitle)`
  margin-top: 32px;
`

export function HomePage() {
  return (
    <>
      <LandingBlurb />
      <PortfolioTitle title="Portfolio" />
    </>
  )
}
