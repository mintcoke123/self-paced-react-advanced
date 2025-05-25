import Header from "../components/Header/Header";
import MainContainer from "../components/Main/MainContainer";
import AsideContainer from "../components/Asides/AsideContainer";
import { RestaurantDataProvider } from "../context/RestaurantDataContext";
import { MainProvider } from "../context/MainContext";
import { RestaurantListPageProvider } from "../context/RestaurantListPageContext";
import { DetailModalProvider } from "../context/DetailModalContext";
import { AddModalProvider } from "../context/AddModalContext";

function RestaurantListPage() {
  return (
    <RestaurantDataProvider>
      <RestaurantListPageProvider>
        <AddModalProvider>
          <Header />
          <DetailModalProvider>
            <MainProvider>
              <MainContainer />
            </MainProvider>
            <AsideContainer />
          </DetailModalProvider>
        </AddModalProvider>
      </RestaurantListPageProvider>
    </RestaurantDataProvider>
  );
}

export default RestaurantListPage;
