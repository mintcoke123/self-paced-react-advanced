import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-right: ${({ isLast }) => (isLast ? "0" : "16px")};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ variant }) =>
    variant === "secondary" ? "transparent" : "var(--primary-color)"};
  color: ${({ variant }) =>
    variant === "secondary" ? "var(--grey-300)" : "var(--grey-100)"};
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid var(--grey-300)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
`;

export default Button;
