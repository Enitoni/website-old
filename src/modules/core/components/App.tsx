import React from "react"

import { ThemeProvider } from "../../theming/components/ThemeProvider"
import { GlobalStyles } from "../../theming/components/GlobalStyles"
import { Background } from "../../graphic/components/Background"

import { Header } from "./Header"
import { Body } from "./Body"
import { ProjectOverlay } from "../../portfolio/components/ProjectOverlay"
import styled from "../../theming/custom"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"

const Main = styled.div<{ visible: boolean }>`
  transition: 200ms ease opacity;

  ${props => {
    if (props.visible) {
      return "opacity: 1;"
    }

    return "opacity: 0;"
  }}
`

export function App() {
  const { selectedProjectStore } = useStores()
  const hasProjectOpen = useObserver(() => !!selectedProjectStore.selected)

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Main visible={!hasProjectOpen}>
        <Header />
        <Body />
      </Main>
      <Background />
      <ProjectOverlay />
    </ThemeProvider>
  )
}
