import styled from "../../theming/custom"
import { getColor, getShadow } from "../../theming/helpers"

export const Card = styled.div`
  background: ${getColor("primary")};
  border-radius: 3px;

  backdrop-filter: blur(15px);
  box-shadow: ${getShadow("light")};

  padding: 16px;
`
