import { StoreManager } from "./classes/StoreManager"
import { StoreMapReturn } from "./types/StoreMapReturn"

import { routingStore } from "../routing/stores/routingStore"

const stores = {
  routingStore,
}

export type Stores = StoreMapReturn<typeof stores>
export const createManager = () => new StoreManager<Stores>(stores)
