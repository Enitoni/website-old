import { InitializableStore } from "../../state/types/InitializableStore"
import { observable } from "mobx"
import { IS_SERVER } from "../../../modules/core/constants"

class SSRStore implements InitializableStore {
  @observable theme = "light"

  public promises: Promise<any>[] = []
  public lazy = false

  public init() {}

  public reset() {
    this.promises = []
  }

  public register(promise: Promise<any>) {
    if (IS_SERVER) {
      this.promises.push(promise)
    }

    return promise
  }

  public async waitFor() {
    await Promise.all(this.promises)
    this.promises = []
  }
}

export const ssrStore = () => new SSRStore()
