import { Renderable } from "../types/Renderable"
import { AnimatedPolygon } from "./AnimatedPolygon"
import { Theme } from "../../theming/types/Theme"

export type SceneOptions = {
  theme: Theme
}

export class Scene implements Renderable {
  private interval: number = 0
  private elements: AnimatedPolygon[] = []

  constructor(private options: SceneOptions, private canvas: HTMLCanvasElement) {}

  public update(options: SceneOptions) {
    this.options = options
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
      spin: Math.random() * 0.2 - 0.1,
      velocity: Math.random() * 1.2 + 0.5,
      theme: this.options.theme,
    })

    this.elements.push(element)
  }

  public render(context: CanvasRenderingContext2D) {
    context.globalCompositeOperation = "xor"
    context.lineWidth = 3

    context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (const element of this.elements) {
      element.render(context)
    }
  }
}
