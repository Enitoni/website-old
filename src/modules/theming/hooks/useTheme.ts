import { useContext } from "react"
import { ThemeContext } from "../custom"

export const useTheme = () => {
  return useContext(ThemeContext)
}
