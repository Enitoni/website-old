import { useRef, useEffect } from "react"

export type CanvasAnimationHandler = (
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  runningTime: number,
  delta: number,
) => void

export const useCanvasAnimation = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  frame: CanvasAnimationHandler,
  enabled = true,
) => {
  const frameRef = useRef<number>()

  useEffect(() => {
    const { current: canvas } = canvasRef

    let previousFrameTime = performance.now()

    const frameHandler: CanvasAnimationHandler = (
      context,
      canvas,
      runningTime,
      delta,
    ) => {
      frame(context, canvas, runningTime, delta)

      const newDelta = performance.now() - previousFrameTime

      frameRef.current = requestAnimationFrame(runningTime =>
        frameHandler(context, canvas, runningTime, newDelta),
      )

      previousFrameTime = performance.now()
    }

    if (canvas && enabled) {
      const context = canvas.getContext("2d")
      if (!context) throw new Error("Couldn't get 2D context")

      frameHandler(context, canvas, 0, 0)
    }

    return () => {
      cancelAnimationFrame(frameRef.current as number)
    }
  }, [enabled, canvasRef, frame])
}
