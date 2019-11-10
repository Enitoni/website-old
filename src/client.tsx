import React from "react"
import ReactDOM from "react-dom"
import { App } from "./modules/core/components/App"

async function main() {
  const element = document.querySelector(".app")!

  ReactDOM.render(<App />, element)
}

main()
