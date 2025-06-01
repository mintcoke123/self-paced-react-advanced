import { selector } from 'recoil';
import { restaurantsDataState, selectedCategoryState } from './atoms';

export const filteredRestaurantsSelector = selector({
  key: 'filteredRestaurants',
  get: ({ get }) => {
    const restaurantsData = get(restaurantsDataState);
    const selectedCategory = get(selectedCategoryState);

    const filteredRestaurants =
      selectedCategory === '전체'
        ? restaurantsData
        : restaurantsData.filter(
            restaurant => restaurant.category === selectedCategory
          );

    return filteredRestaurants;
  },
});
