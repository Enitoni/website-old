import { StoreManager } from "./classes/StoreManager"
import { StoreMapReturn } from "./types/StoreMapReturn"

import { routingStore } from "../routing/stores/routingStore"
import { selectedProjectStore } from "../../modules/portfolio/stores/selectedProjectStore"
import { ssrStore } from "../ssr/stores/ssrStore"
import { metaStore } from "../../modules/core/stores/metaStore"

const stores = {
  metaStore,
  routingStore,
  selectedProjectStore,
  ssrStore,
}

export type Stores = StoreMapReturn<typeof stores>
export const createManager = () => new StoreManager<Stores>(stores)
