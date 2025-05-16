import styled from "styled-components";
import { TEXT } from "../Constants/messages";
import { BUTTON_ICONS } from "../Constants/icons";

const Gnb = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  width: 100%;
  background-color: var(--primary-color);
`;

const GnbTitle = styled.h1`
  color: #ffffff;
`;

const GnbButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

function Header({ setIsAddModalOpen }) {
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <Gnb>
      <GnbTitle className="text-title">{TEXT.HEADER_TITLE}</GnbTitle>
      <GnbButton
        type="button"
        aria-label={TEXT.ADD_BUTTON_ARIA_LABEL}
        onClick={handleOpenAddModal}
      >
        <img src={BUTTON_ICONS.ADD} alt={TEXT.ADD_BUTTON_ARIA_LABEL} />
      </GnbButton>
    </Gnb>
  );
}

export default Header;
