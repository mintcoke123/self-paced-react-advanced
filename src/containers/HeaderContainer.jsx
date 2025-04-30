import Header from "../components/header/header";

const HeaderContainer = ({openAddModal}) => {
  return (
    <>
      <Header openAddModal = {openAddModal}/>
    </> 
  );
};

export default HeaderContainer;