import styled, { css } from "../../../modules/theming/custom"

/** Consistent spacing of buttons */
export const ButtonList = styled.div<{ horizontal?: boolean }>`
  ${props => {
    const { horizontal = false } = props

    const verticalStyle = css`
      > * + * {
        margin-top: 16px;
      }
    `

    const horizontalStyle = css`
      display: flex;

      > * + * {
        margin-left: 16px;
      }
    `

    return horizontal ? horizontalStyle : verticalStyle
  }}
`
