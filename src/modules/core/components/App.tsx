import { ThemeProvider } from "../../theming/components/ThemeProvider"
import { GlobalStyles } from "../../theming/components/GlobalStyles"
import React from "react"

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
