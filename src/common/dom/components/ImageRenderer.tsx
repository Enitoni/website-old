/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react"
import styled, { keyframes, css } from "../../../modules/theming/custom"
import React from "react"
import { cover } from "polished"
import { TransitionGroup, Transition } from "react-transition-group"
import { TransitionStatus } from "react-transition-group/Transition"
import { IS_SERVER } from "../../../modules/core/constants"

export type ImageRendererProps = {
  src: string
  className?: string
  alt: string
}

const Container = styled.div`
  position: relative;
  overflow: hidden;

  background: black;
`

const Animation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const RenderedImage = styled.div<{ status: TransitionStatus }>`
  ${cover()}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${props => {
    const { status } = props

    if (status === "entering")
      return css`
        animation: ${Animation} 500ms ease forwards;
      `

    if (status === "exiting")
      return css`
        animation: ${Animation} 500ms ease forwards reverse;
      `
  }}
`

export function ImageRenderer(props: ImageRendererProps) {
  const { src, alt, className } = props

  if (IS_SERVER) {
    return (
      <Container>
        <RenderedImage
          role="img"
          aria-label={alt}
          style={{
            backgroundImage: `url(${src})`,
          }}
          status="entered"
        />
      </Container>
    )
  }

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
