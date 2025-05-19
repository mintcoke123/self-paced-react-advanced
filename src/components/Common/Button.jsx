import styled from "styled-components";
import { Typography } from "./Typography";

const getButtonStyles = (variant) => {
  switch (variant) {
    case "gnb":
      return {
        width: "auto",
        height: "40px",
        marginRight: "0",
        fontWeight: "normal",
        background: "transparent",
        color: "inherit",
        fontSize: "24px",
        cursor: "pointer",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    case "modal":
      return {
        width: "100%",
        height: "44px",
        marginRight: "16px",
        fontWeight: "600",
        background: "var(--primary-color)",
        color: "var(--grey-100)",
        fontSize: "inherit",
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
        marginRight: "16px",
        fontWeight: "600",
        background: "var(--primary-color)",
        color: "var(--grey-100)",
        fontSize: "inherit",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      };
  }
};

const StyledButton = styled(Typography.Caption)`
  ${({ variant }) => {
    const styles = getButtonStyles(variant);
    return `
      width: ${styles.width};
      height: ${styles.height};
      margin-right: ${styles.marginRight};
      border: ${styles.border};
      border-radius: ${styles.borderRadius};
      font-weight: ${styles.fontWeight};
      cursor: ${styles.cursor};
      background: ${styles.background};
      color: ${styles.color};
      display: ${styles.display};
      align-items: ${styles.alignItems};
      justify-content: ${styles.justifyContent};
      font-size: ${styles.fontSize};
    `;
  }}

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  &:last-child {
    margin-right: 0;
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
