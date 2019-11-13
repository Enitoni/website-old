import React from "react"
import styled from "../../theming/custom"

import { LandingBlurb } from "./LandingBlurb"
import { ProjectGrid } from "../../portfolio/components/ProjectGrid"

const Gap = styled.div`
  margin-top: 32px;
`

export function HomePage() {
  return (
    <>
      <LandingBlurb />
      <Gap />
      <ProjectGrid />
    </>
  )
}
