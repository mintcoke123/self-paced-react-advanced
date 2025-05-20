import styled from "styled-components";
import { TEXT } from "../../constants/messages";
import { BUTTON_ICONS } from "../../constants/icons";
import { Title } from "../Common/Typography";
import Button from "../Common/Button";

const Gnb = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  width: 100%;
  background-color: var(--primary-color);
`;

const HeaderTitle = styled(Title)`
  color: ${({ color }) => color || "#fcfcfd"};
`;

function Header({ setIsAddModalOpen, titleColor }) {
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <Gnb>
      <HeaderTitle color={titleColor}>{TEXT.HEADER_TITLE}</HeaderTitle>
      <Button variant="gnb" onClick={handleOpenAddModal}>
        <img src={BUTTON_ICONS.ADD} alt={TEXT.ADD_BUTTON_ARIA_LABEL} />
      </Button>
    </Gnb>
  );
}

export default Header;
