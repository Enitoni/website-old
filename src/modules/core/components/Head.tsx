import React from "react"
import ReactDOM from "react-dom"

export function Head() {
  const content = (
    <>
      <title>enitoni.dev</title>
      <link
        href="https://fonts.googleapis.com/css?family=Heebo:400,500,700&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="initial-scale=1" />
      <link rel="icon" href="/favicon16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon48.png" sizes="48x48" type="image/png" />
      <link rel="icon" href="/favicon16.png" sizes="64x64" type="image/png" />
    </>
  )

  return ReactDOM.createPortal(content, document.head)
}
