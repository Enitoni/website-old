import { useState, useEffect } from "react"
import styled from "../../../modules/theming/custom"
import React from "react"
import { cover } from "polished"
import { TransitionGroup, Transition } from "react-transition-group"
import { TransitionStatus } from "react-transition-group/Transition"

export type ImageRendererProps = {
  src: string
  className?: string
  alt: string
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
`

const RenderedImage = styled.div<{ status: TransitionStatus }>`
  ${cover()}

  transition: 500ms ease opacity;
  background-size: cover;

  ${props => {
    const { status } = props

    if (status === "entering")
      return `
      opacity: 1;
    `

    if (status === "entered")
      return `
      opacity: 1;
    `

    if (status === "exiting")
      return `
      opacity: 0;
    `
  }}
`

export function ImageRenderer(props: ImageRendererProps) {
  const { src, alt, className } = props

  const [image] = useState(() => document.createElement("img"))
  const [currentSrc, setCurrentSrc] = useState("")

  useEffect(() => {
    image.onload = () => {
      setCurrentSrc(src)
    }

    image.src = src
  }, [image, src])

  const renderCurrent = () => {
    if (!currentSrc) return

    return (
      <Transition key={currentSrc} timeout={500}>
        {status => (
          <RenderedImage
            status={status}
            role="img"
            aria-label={alt}
            style={{
              backgroundImage: `url(${currentSrc})`,
            }}
          />
        )}
      </Transition>
    )
  }

  return (
    <Container className={className}>
      <TransitionGroup>{renderCurrent()}</TransitionGroup>
    </Container>
  )
}
