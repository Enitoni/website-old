import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { CANONICAL_HOST, IS_SERVER } from "../constants"
import { useTheme } from "../../theming/hooks/useTheme"

export function Head() {
  const theme = useTheme()
  const { metaStore, routingStore } = useStores()

  const { pathname } = useObserver(() => routingStore.location)
  const { title, description } = useObserver(() => metaStore.value)

  const keywords = ["javascript", "documentation", "gears", "bot", "library"]

  const renderDescription = (description: string) => {
    return (
      <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </>
    )
  }

  const ogTags = (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${CANONICAL_HOST}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${CANONICAL_HOST}/img/thumb.png`} />
      <meta property="og:site_name" content="enitoni.dev" />
    </>
  )

  const content = (
    <>
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="viewport" content="initial-scale=1" />
      <meta name="theme-color" content={theme.colors.accent} />
      <title>{title !== "Enitoni" ? `${title} | enitoni.dev` : "Enitoni"}</title>
      {ogTags}
      {renderDescription(description)}
      <link
        href="https://fonts.googleapis.com/css?family=Heebo:400,500,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon48.png" sizes="48x48" type="image/png" />
      <link rel="icon" href="/favicon16.png" sizes="64x64" type="image/png" />
    </>
  )

  useEffect(() => {
    if (IS_SERVER) return

    document
      .querySelectorAll("[data-server-head=true]")
      .forEach(element => element.remove())
  }, [])

  if (IS_SERVER) {
    return (
      <>
        {React.Children.map(content.props.children, (element, i) =>
          React.cloneElement(element, {
            key: i,
            "data-server-head": true,
          }),
        )}
      </>
    )
  }

  return ReactDOM.createPortal(content, document.head)
}
