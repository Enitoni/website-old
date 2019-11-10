import { ThemedStyledComponentsModule } from "styled-components"
import * as styledComponents from "styled-components"

import { Theme } from "./types/Theme"

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
} = styledComponents as ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeContext }
export default styled
