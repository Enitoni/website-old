import { Renderable } from "../types/Renderable"

export type PolygonOptions = {
  outlined?: boolean
  rotation?: number
  points: number
  size: number
  x: number
  y: number
}

export class Polygon implements Renderable {
  constructor(private options: PolygonOptions) {}

  public move(x = 0, y = 0) {
    this.options.x += x
    this.options.y += y
  }

  public rotate(d = 0) {
    this.options.rotation! += d
  }

  public render(context: CanvasRenderingContext2D) {
    const { outlined = false, rotation = 0, points, size, x, y } = this.options

    const sideArc = (Math.PI * 2) / points
    const offset = (rotation / 360) * Math.PI * 2

    context.beginPath()

    for (let i = offset; i < Math.PI * 2 + offset; i += sideArc) {
      const polygonX = Math.sin(i) * size + x
      const polygonY = Math.cos(i) * size + y

      context.lineTo(polygonX, polygonY)
    }

    context.closePath()

    if (outlined) {
      return context.stroke()
    }

    return context.fill()
  }

  public get x() {
    return this.options.x
  }

  public get y() {
    return this.options.y
  }

  public get size() {
    return this.options.size
  }
}
