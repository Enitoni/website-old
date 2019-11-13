import React from "react"
import styled from "../../../modules/theming/custom"
import { IconType } from "../../icons/types/IconType"
import { SVGIcon } from "../../icons/components/SVGIcon"

export type ButtonVariants = {
  stretch?: boolean
}

export type ButtonProps = ButtonVariants & {
  className?: string
  icon?: IconType
  label?: string
  onClick: () => void
}

const Container = styled.button<ButtonVariants>`
  ${props =>
    props.stretch &&
    `
    width: 100%;
  `}

  &:focus {
    outline: none;
  }
`

const Inner = styled.span<ButtonVariants>`
  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.stretch &&
    `
    width: 100%;
  `}
`

export function Button<T extends object = {}>(props: ButtonProps & T) {
  const { stretch, className, icon, label, ...rest } = props

  const renderIcon = () => {
    if (!icon) return

    return <SVGIcon name={icon} className="icon" />
  }

  const renderLabel = () => {
    if (!label) return

    return <span className="label">{label}</span>
  }

  return (
    <Container stretch={stretch} {...rest}>
      <Inner stretch={stretch} className={className}>
        {renderIcon()}
        {renderLabel()}
      </Inner>
    </Container>
  )
}

export type ButtonWithProps<T extends object> = (props: ButtonProps & T) => JSX.Element
