import styled from "../../theming/custom"
import { getColor, getShadow } from "../../theming/helpers"

export const Card = styled.div`
  border-radius: 4px;

  background: ${getColor("primaryFallback")};

  @supports (backdrop-filter: blur(15px)) {
    background: ${getColor("primary")};
    backdrop-filter: blur(15px);
  }

  box-shadow: ${getShadow("light")};

  padding: 16px;
`
