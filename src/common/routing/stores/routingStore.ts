import { createUniversalHistory } from "../helpers/createUniversalHistory"
import { InitializableStore } from "../../state/types/InitializableStore"
import { IS_SERVER } from "../../../modules/core/constants"
import { observable } from "mobx"

export enum HttpStatus {
  OK = 200,
  NotFound = 404,
}

class RoutingStore implements InitializableStore {
  private history = createUniversalHistory()
  public status = HttpStatus.OK

  @observable public location = this.history.location

  public init() {
    this.history.listen(location => {
      this.location = location
    })
  }

  public push = (path: string) => {
    if (path === this.location.pathname) return
    this.history.push(path)
  }

  public replace = (path: string) => {
    if (IS_SERVER) {
      this.location.pathname = path
    } else {
      this.history.replace(path)
    }
  }
}

export const routingStore = () => new RoutingStore()
