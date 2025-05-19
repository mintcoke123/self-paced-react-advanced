import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const ButtonPrimary = styled(Button)`
  background: var(--primary-color);
  color: var(--grey-100);
`;

function ModalButton({ handleButtonOnClick, buttonType, buttonText }) {
  return (
    <ButtonContainer>
      <ButtonPrimary
        type={buttonType}
        onClick={handleButtonOnClick}
        className="text-caption"
      >
        {buttonText}
      </ButtonPrimary>
    </ButtonContainer>
  );
}

export default ModalButton;
