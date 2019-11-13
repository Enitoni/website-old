import React from "react"

import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { ProjectRenderer } from "./ProjectRenderer/ProjectRenderer"

export function ProjectOverlay() {
  const { selectedProjectStore } = useStores()
  const project = useObserver(() => selectedProjectStore.selected)

  if (!project) return null

  return <ProjectRenderer project={project} />
}
