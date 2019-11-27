import { InitializableStore } from "../../state/types/InitializableStore"
import { observable } from "mobx"

class SSRStore implements InitializableStore {
  @observable theme = "light"

  public init() {}
}

export const ssrStore = () => new SSRStore()
