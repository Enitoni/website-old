import React from "react"
import UrlPattern from "url-pattern"

import { useObserver } from "mobx-react-lite"
import { useStores } from "../../state/hooks/useStores"

export interface Route {
  pattern: string
  render: (params: any) => React.ReactElement
}

export const useRouter = (routes: Route[]) => {
  const { routingStore } = useStores()

  return useObserver(() => {
    const { pathname } = routingStore.location

    for (const route of routes) {
      const match = new UrlPattern(route.pattern, {
        segmentValueCharset: "a-zA-Z0-9-_~%.",
      }).match(pathname)

      if (match) {
        return () => route.render(match)
      }
    }

    return () => null
  })
}
