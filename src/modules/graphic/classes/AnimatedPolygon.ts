import { Renderable } from "../types/Renderable"
import { Polygon } from "./Polygon"
import { Theme } from "../../theming/types/Theme"

export type AnimatedPolygonOptions = {
  accented: boolean
  velocity: number
  theme: Theme
  spin: number
}

export class AnimatedPolygon implements Renderable {
  private polygon: Polygon

  constructor(canvas: HTMLCanvasElement, private options: AnimatedPolygonOptions) {
    const points = Math.floor(Math.random() * 5) + 3
    const size = Math.floor(Math.random() * 90) + 60
    const outlined = Math.random() > 0.8

    this.polygon = new Polygon({
      rotation: Math.random() * 360,
      x: Math.floor(Math.random() * canvas.width),
      y: canvas.height + size,
      outlined,
      points,
      size,
    })
  }

  public update(newOptions: Partial<AnimatedPolygonOptions>) {
    this.options = { ...this.options, ...newOptions }
  }

  public render(delta: number, context: CanvasRenderingContext2D) {
    const { accented, theme } = this.options

    const color = accented ? theme.colors.accent : theme.fontColors.normal

    context.fillStyle = color
    context.strokeStyle = color

    this.polygon.move(0, -this.options.velocity * delta)
    this.polygon.rotate(this.options.spin * delta)
    this.polygon.render(delta, context)
  }

  public get isOutsideViewport() {
    return this.polygon.y < -this.polygon.size
  }
}
