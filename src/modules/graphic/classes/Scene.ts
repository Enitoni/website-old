import { Renderable } from "../types/Renderable"
import { AnimatedPolygon } from "./AnimatedPolygon"
import { Theme } from "../../theming/types/Theme"

const MAX_ITEMS = 50

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
      if (this.elements.length < MAX_ITEMS) {
        this.createElement()
      }
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

    this.elements = this.elements.filter(x => !x.isOutsideViewport)
  }
}
