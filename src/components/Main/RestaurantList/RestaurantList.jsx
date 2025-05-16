import styled from "styled-components";
import { CATEGORY_ICONS } from "../../Constants/icons";
import RestaurantComponent from "./RestaurantComponent";

const RestaurantListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

function RestaurantList({
  filteredRestaurants,
  selectClickedRestaurant,
  setIsDetailModalOpen,
}) {
  return (
    <RestaurantListContainer>
      {filteredRestaurants?.map(({ id, category, name, description }) => (
        <RestaurantComponent
          id={id}
          key={name}
          category={category}
          categoryIcon={CATEGORY_ICONS[category]}
          name={name}
          description={description}
          setIsDetailModalOpen={setIsDetailModalOpen}
          selectClickedRestaurant={selectClickedRestaurant}
        />
      ))}
    </RestaurantListContainer>
  );
}

export default RestaurantList;
