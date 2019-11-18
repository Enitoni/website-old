import styled from "../../../modules/theming/custom"
import { ImageRenderer } from "./ImageRenderer"
import { getShadow } from "../../../modules/theming/helpers"
import { useState, useEffect } from "react"
import React from "react"

export type SlideshowEntry = {
  src: string
  label: string
}

export type ImageSlideshowProps = {
  entries: SlideshowEntry[]
  className?: string
}

export const Container = styled.div``

const SelectedImage = styled(ImageRenderer)`
  border-radius: 4px;
  box-shadow: ${getShadow("light")};

  margin-bottom: 16px;
`

const preloadEntries = (entries: SlideshowEntry[]) => {
  for (const entry of entries) {
    const image = document.createElement("img")
    image.src = entry.src
  }
}

export function ImageSlideshow(props: ImageSlideshowProps) {
  const { entries, className } = props

  const [index, setIndex] = useState(0)
  const entry = entries[index]

  useEffect(() => {
    preloadEntries(entries)
  }, [entries])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (index === entries.length - 1) {
        return setIndex(0)
      }

      setIndex(index + 1)
    }, 5000)

    return () => window.clearInterval(timer)
  })

  return (
    <Container>
      <SelectedImage className={className} src={entry.src} alt={entry.label} />
    </Container>
  )
}
