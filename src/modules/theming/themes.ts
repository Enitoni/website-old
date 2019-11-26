import { Theme } from "./types/Theme"

export const lightTheme: Theme = {
  colors: {
    primary: "rgba(255, 255, 255, 0.8)",
    primaryFallback: "#fff",
    background: "#efefef",
    accent: "#14df96",
  },
  fontColors: {
    normal: "#252525",
  },
  shadows: {
    light: "0px 1px 10px rgba(0, 0, 0, 0.15)",
  },
}

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: "rgba(23, 23, 23, 0.85)",
    primaryFallback: "#131313",
    background: "#000",
  },
  fontColors: {
    normal: "#e0e0e0",
  },
}
