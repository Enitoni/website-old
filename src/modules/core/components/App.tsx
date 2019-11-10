import { ThemeProvider } from "../../theming/components/ThemeProvider"
import { GlobalStyles } from "../../theming/components/GlobalStyles"
import React from "react"
import { Background } from "../../graphic/components/Background"

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Background />
    </ThemeProvider>
  )
}
