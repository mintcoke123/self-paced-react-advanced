import RestaurantListPage from "./pages/RestaurantListPage";
import "./App.css";
import { RecoilRoot } from "recoil"

function App() {
  return (
    <RecoilRoot>
      <RestaurantListPage />
    </RecoilRoot>
  );
}

export default App;
