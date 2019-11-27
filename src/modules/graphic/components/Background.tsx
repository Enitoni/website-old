import styled from "../../theming/custom"
import React, { useRef, useEffect } from "react"
import {
  CanvasAnimationHandler,
  useCanvasAnimation,
} from "../../../common/dom/hooks/useCanvasAnimation"
import { Scene } from "../classes/Scene"
import { useTheme } from "../../theming/hooks/useTheme"

export const Container = styled.canvas`
  position: fixed;

  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;

  z-index: -9999;

  width: 100%;
  height: 100%;
`

export function Background() {
  const theme = useTheme()
  const sceneRef = useRef<Scene>()
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const { current: canvas } = ref

    if (canvas) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      if (!sceneRef.current) {
        const scene = new Scene({ theme }, canvas)
        sceneRef.current = scene
      } else {
        sceneRef.current.update({ theme })
      }

      sceneRef.current.start()
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.stop()
      }
    }
  }, [theme])

  const frame: CanvasAnimationHandler = (context, canvas, runningTime, delta) => {
    const { current: scene } = sceneRef

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    if (scene) scene.render(delta, context)
  }

  useCanvasAnimation(ref, frame)

  return <Container ref={ref} />
}
