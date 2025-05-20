import styled from "styled-components";
import { Caption } from "./Typography";

const Button = styled(Caption)`
  ${({ variant }) => {
    if (variant === "gnb") {
      return `
        width: auto;
        height: 40px;
        background: transparent;
        color: inherit;
        border: none;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      `;
    }

    if (variant === "modal") {
      return `
        width: 100%;
        height: 44px;
        background: var(--primary-color);
        color: var(--grey-100);
        border: none;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      `;
    }
  }}

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

export default Button;
