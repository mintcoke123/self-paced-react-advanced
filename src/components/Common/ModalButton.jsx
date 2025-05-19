import styled from "styled-components";
import { Typography } from "./Typography";

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled(Typography.Caption)`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-right: 0;
  }
`;

function ModalButton({ handleButtonOnClick, buttonType, buttonText }) {
  return (
    <ButtonContainer>
      <StyledButton as="button" type={buttonType} onClick={handleButtonOnClick}>
        {buttonText}
      </StyledButton>
    </ButtonContainer>
  );
}

export default ModalButton;
