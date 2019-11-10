import { IS_SERVER } from "../../../modules/core/constants"
import { createBrowserHistory, createMemoryHistory } from "history"

export const createUniversalHistory = () => {
  if (IS_SERVER) return createMemoryHistory()
  return createBrowserHistory()
}
