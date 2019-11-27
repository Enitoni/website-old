import { Renderable } from "../types/Renderable"
import { AnimatedPolygon } from "./AnimatedPolygon"
import { Theme } from "../../theming/types/Theme"

const SPEED_DIVISION = 128

export type SceneOptions = {
  theme: Theme
}

export class Scene implements Renderable {
  private interval: number = 0
  private elements: AnimatedPolygon[] = []

  constructor(private options: SceneOptions, private canvas: HTMLCanvasElement) {}

  public update(options: SceneOptions) {
    this.options = options
    const { theme } = options

    for (const element of this.elements) {
      element.update({ theme })
    }
  }

  public start() {
    this.interval = window.setInterval(() => {
      const maxItems = this.canvas.offsetWidth / 100

      if (this.elements.length < maxItems) {
        this.createElement()
      }

      this.elements = this.elements.filter(x => !x.isOutsideViewport)
    }, 800)
  }

  public stop() {
    window.clearInterval(this.interval)
  }

  private createElement() {
    const element = new AnimatedPolygon(this.canvas, {
      accented: Math.random() > 0.6,
      spin: (Math.random() * 5 - 2.5) / SPEED_DIVISION,
      velocity: (Math.random() * 10.0 + 3.0) / SPEED_DIVISION,
      theme: this.options.theme,
    })

    this.elements.push(element)
  }

  public render(delta: number, context: CanvasRenderingContext2D) {
    context.globalCompositeOperation = "xor"
    context.lineWidth = 3

    context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (const element of this.elements) {
      element.render(delta, context)
    }
  }
}
