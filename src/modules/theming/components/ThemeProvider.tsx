import React from "react"

import { ThemeProvider as Provider } from "../custom"
import { lightTheme, darkTheme } from "../themes"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"

export function ThemeProvider(props: { children: any }) {
  const { ssrStore } = useStores()
  const theme = useObserver(() => ssrStore.theme)

  return (
    <Provider theme={theme === "light" ? lightTheme : darkTheme}>
      {props.children}
    </Provider>
  )
}
