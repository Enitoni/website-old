import React from "react"

import { ThemeProvider as Provider } from "../custom"
import { lightTheme } from "../themes"

export function ThemeProvider(props: { children: any }) {
  return <Provider theme={lightTheme}>{props.children}</Provider>
}
