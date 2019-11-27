import styled, { keyframes, css } from "../../theming/custom"
import React from "react"

import { HEADER_HEIGHT, CONTENT_WIDTH, SMALL_SCREEN_QUERY } from "../constants"
import { PropsWithChildren } from "react"
import { Route, useRouter } from "../../../common/routing/hooks/useRouter"

// Pages
import { HomePage } from "../../home/components/HomePage"
import { AboutPage } from "../../about/components/AboutPage"
import { SwitchTransition, Transition } from "react-transition-group"
import { TransitionStatus } from "react-transition-group/Transition"

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

const PageAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const ContentContent = styled.div<{ status: TransitionStatus }>`
  ${props => {
    if (props.status === "entering")
      return css`
        animation: ${PageAnimation} 200ms ease forwards;
      `

    if (props.status === "exiting") {
      return css`
        animation: ${PageAnimation} 200ms ease forwards reverse;
      `
    }
  }}
`

const routes: Route[] = [
  {
    name: "home",
    pattern: "/",
    render: () => <HomePage />,
  },
  {
    name: "about",
    pattern: "/about",
    render: () => <AboutPage />,
  },
]

export function Body(props: PropsWithChildren<{}>) {
  const [name, renderContent] = useRouter(routes)

  return (
    <Container>
      <Content>
        <SwitchTransition>
          <Transition onEntering={() => window.scrollTo(0, 0)} timeout={200} key={name}>
            {status => <ContentContent status={status}>{renderContent()}</ContentContent>}
          </Transition>
        </SwitchTransition>
      </Content>
    </Container>
  )
}
