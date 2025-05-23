import Header from "../components/Header/header";
import MainContainer from "../components/Main/MainContainer";
import AsideContainer from "../components/Asides/AsideContainer";
import { RestaurantDataProvider } from '../context/RestaurantDataContext';
import { AddModalProvider } from '../context/AddModalContext';
import { DetailModalProvider } from '../context/DetailModalContext';

function RestaurantListPage() {
  return (
    <RestaurantDataProvider>
      <AddModalProvider>
        <DetailModalProvider>
          <Header />
          <MainContainer />
          <AsideContainer />
        </DetailModalProvider>
      </AddModalProvider>
    </RestaurantDataProvider>
  );
}

export default RestaurantListPage;
