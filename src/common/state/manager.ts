import { StoreManager } from "./classes/StoreManager"
import { StoreMapReturn } from "./types/StoreMapReturn"

import { routingStore } from "../routing/stores/routingStore"
import { selectedProjectStore } from "../../modules/portfolio/stores/selectedProjectStore"
import { ssrStore } from "../ssr/stores/ssrStore"

const stores = {
  routingStore,
  selectedProjectStore,
  ssrStore,
}

export type Stores = StoreMapReturn<typeof stores>
export const createManager = () => new StoreManager<Stores>(stores)
