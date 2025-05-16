import styled from "styled-components";

const Restaurant = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

const RestaurantCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: var(--lighten-color);
`;

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function RestaurantComponent({
  id,
  category,
  categoryIcon,
  name,
  description,
  selectClickedRestaurant,
  setIsDetailModalOpen,
}) {
  function handleShowClickedRestaurant() {
    selectClickedRestaurant(id);
    setIsDetailModalOpen(true);
  }

  return (
    <Restaurant onClick={handleShowClickedRestaurant}>
      <RestaurantCategory>
        <CategoryIcon src={categoryIcon} alt={category} />
      </RestaurantCategory>
      <RestaurantInfo>
        <RestaurantName className="textSubtitle">{name}</RestaurantName>
        <RestaurantDescription className="textBody">
          {description}
        </RestaurantDescription>
      </RestaurantInfo>
    </Restaurant>
  );
}

export default RestaurantComponent;
