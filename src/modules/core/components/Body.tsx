import styled from "../../theming/custom"
import React from "react"

import { HEADER_HEIGHT, CONTENT_WIDTH, SMALL_SCREEN_QUERY } from "../constants"
import { PropsWithChildren } from "react"
import { Route, useRouter } from "../../../common/routing/hooks/useRouter"

// Pages
import { HomePage } from "../../home/components/HomePage"

const Container = styled.main`
  margin-top: ${parseInt(HEADER_HEIGHT) + 32}px;
  display: flex;
  justify-content: center;

  ${SMALL_SCREEN_QUERY} {
    margin-top: ${parseInt(HEADER_HEIGHT) + 16}px;
  }
`

const Content = styled.div`
  width: ${parseInt(CONTENT_WIDTH) + 32}px;

  padding: 0px 16px;
  padding-bottom: 32px;

  ${SMALL_SCREEN_QUERY} {
    padding-bottom: 16px;
  }
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
