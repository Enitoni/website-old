import styled from "../../theming/custom"
import React from "react"

import { HEADER_HEIGHT, CONTENT_WIDTH } from "../constants"
import { PropsWithChildren } from "react"
import { Route, useRouter } from "../../../common/routing/hooks/useRouter"

// Pages
import { HomePage } from "../../home/components/HomePage"

const Container = styled.main`
  margin-top: ${parseInt(HEADER_HEIGHT) + 64}px;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: ${CONTENT_WIDTH};
`

const routes: Route[] = [
  {
    pattern: "/",
    render: () => <HomePage />,
  },
]

export function Body(props: PropsWithChildren<{}>) {
  const renderContent = useRouter(routes)

  return (
    <Container>
      <Content>{renderContent()}</Content>
    </Container>
  )
}
