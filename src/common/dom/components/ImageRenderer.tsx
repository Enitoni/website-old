import { useState, useEffect } from "react"
import styled from "../../../modules/theming/custom"
import React from "react"

export type ImageRendererProps = {
  src: string
  className?: string
  alt: string
}

const Container = styled.div<{ loaded: boolean }>`
  transition: 200ms ease opacity;
  opacity: ${props => (props.loaded ? 1 : 0)};

  background-size: cover;
`

export function ImageRenderer(props: ImageRendererProps) {
  const { src, alt, className } = props

  const [image] = useState(() => document.createElement("img"))
  const [loaded, setLoaded] = useState(image.complete)
  const [currentSrc, setCurrentSrc] = useState("")

  useEffect(() => {
    image.onload = () => {
      setLoaded(true)
      setCurrentSrc(src)
    }

    setLoaded(false)

    const timer = window.setTimeout(() => {
      image.src = src
    }, 200)

    return () => window.clearTimeout(timer)
  }, [image, src])

  return (
    <Container
      role="img"
      loaded={loaded}
      aria-label={alt}
      className={className}
      style={{
        backgroundImage: `url(${currentSrc})`,
      }}
    />
  )
}
