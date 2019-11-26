import { createGlobalStyle } from "../custom"
import { getFontColor, getColor } from "../helpers"

export const GlobalStyles = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  line-height: inherit;
  margin: 0;
}

html,
body {
  margin: 0;
  padding: 0;

  font-family: Heebo, sans-serif;

  color: ${getFontColor("normal")};

  @media (max-width: 700px) {
    font-size: 15px;
  }
}

html {
  background: ${getColor("background")};
}

body {
  overflow-y: scroll;
}

a {
  text-decoration: none;
}

svg {
  fill: ${getFontColor("normal")};
}

li {
  padding: 8px;
  padding-left: 0px;
}

* {
  box-sizing: border-box;
  scrollbar-width: thin;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;
}

`
