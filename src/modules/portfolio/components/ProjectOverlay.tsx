import React from "react"

import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { ProjectRenderer } from "./ProjectRenderer/ProjectRenderer"
import { TransitionGroup, Transition } from "react-transition-group"

export function ProjectOverlay() {
  const { selectedProjectStore } = useStores()
  const project = useObserver(() => selectedProjectStore.selected)

  return (
    <TransitionGroup>
      {project ? (
        <Transition timeout={500} key={project.name}>
          {status => <ProjectRenderer status={status} project={project} />}
        </Transition>
      ) : null}
    </TransitionGroup>
  )
}
