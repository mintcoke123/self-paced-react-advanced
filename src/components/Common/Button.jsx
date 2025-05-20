import styled from "styled-components";
import { Caption } from "./Typography";

const getButtonStyles = (variant) => {
  switch (variant) {
    case "gnb":
      return {
        width: "auto",
        height: "40px",
        background: "transparent",
        color: "inherit",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      };
    case "modal":
      return {
        width: "100%",
        height: "44px",
        background: "var(--primary-color)",
        color: "var(--grey-100)",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      };
    default:
      return {
        width: "100%",
        height: "44px",
        background: "var(--primary-color)",
        color: "var(--grey-100)",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      };
  }
};

const StyledButton = styled(Caption)`
  ${({ variant }) => {
    const styles = getButtonStyles(variant);
    return `
      width: ${styles.width};
      height: ${styles.height};
      border: ${styles.border};
      border-radius: ${styles.borderRadius};
      background: ${styles.background};
      color: ${styles.color};
      display: ${styles.display};
      align-items: ${styles.alignItems};
      justify-content: ${styles.justifyContent};
      cursor: ${styles.cursor};
    `;
  }}

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

function Button({
  variant = "modal",
  handleButtonOnClick,
  buttonType,
  buttonText,
  children,
}) {
  return (
    <StyledButton
      type={buttonType}
      onClick={handleButtonOnClick}
      variant={variant}
    >
      {buttonText || children}
    </StyledButton>
  );
}

export default Button;
