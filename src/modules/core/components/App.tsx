import React from "react"

import { ThemeProvider } from "../../theming/components/ThemeProvider"
import { GlobalStyles } from "../../theming/components/GlobalStyles"
import { Background } from "../../graphic/components/Background"

import { Header } from "./Header"
import { Body } from "./Body"

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <Body />
      <Background />
    </ThemeProvider>
  )
}
