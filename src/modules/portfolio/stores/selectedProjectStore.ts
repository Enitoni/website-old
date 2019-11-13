import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable } from "mobx"
import { Project } from "../types/Project"

class SelectedProjectStore implements InitializableStore {
  public init() {}

  @observable selected?: Project
}

export const selectedProjectStore = () => new SelectedProjectStore()
