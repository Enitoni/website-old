import React from "react"
import ReactDOM from "react-dom"

async function main() {
  const element = document.querySelector(".app")!

  ReactDOM.render(<div>Hello world</div>, element)
}

main()
