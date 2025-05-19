import styled from "styled-components";
import { Typography } from "./Typography";

const ModalOpen = styled.div`
  display: flex;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 32px 16px;
  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

function Modal({ handleCloseModal, children, modalTitle }) {
  return (
    <ModalOpen>
      <ModalBackdrop onClick={handleCloseModal} />
      <ModalContainer>
        <Typography.ModalTitle>{modalTitle}</Typography.ModalTitle>
        {children}
      </ModalContainer>
    </ModalOpen>
  );
}

export default Modal;
