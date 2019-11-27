import styled from "../custom"
import { Button } from "../../../common/button/components/Button"
import { size } from "polished"
import { HEADER_HEIGHT } from "../../core/constants"
import { useLocalStorage } from "../../../common/dom/hooks/useLocalStorage"
import React, { useEffect } from "react"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"

const Container = styled(Button)<{
  active: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${size(HEADER_HEIGHT)}

  > .icon {
    ${size(24)}

    ${props =>
      props.active &&
      `
      fill: ${props.theme.colors.accent}
    `}
  }
`

export function ThemeToggle() {
  const { ssrStore } = useStores()
  const currentTheme = useObserver(() => ssrStore.theme)

  const [theme, setTheme] = useLocalStorage("theme", "light")

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark")
      ssrStore.theme = "dark"
    } else {
      setTheme("light")
      ssrStore.theme = "light"
    }
  }

  useEffect(() => {
    ssrStore.theme = theme
  }, [ssrStore.theme, theme])

  return (
    <Container
      title="Toggle dark theme"
      active={currentTheme === "dark"}
      icon="moon"
      onClick={toggle}
    />
  )
}
