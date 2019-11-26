import React from "react"
import styled from "../../theming/custom"

import { LandingBlurb } from "./LandingBlurb"
import { ProjectGrid } from "../../portfolio/components/ProjectGrid"
import { SMALL_SCREEN_QUERY } from "../../core/constants"

const Gap = styled.div`
  margin-top: 32px;

  ${SMALL_SCREEN_QUERY} {
    margin-top: 16px;
  }
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
