import { StoreManager } from "./classes/StoreManager"
import { StoreMapReturn } from "./types/StoreMapReturn"

const stores = {}

export type Stores = StoreMapReturn<typeof stores>
export const createManager = () => new StoreManager<Stores>(stores)
