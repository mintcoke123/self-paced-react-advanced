import { atom } from 'recoil';

export const restaurantsDataState = atom({
  key: 'restaurantsData',
  default: null,
});

export const isAddModalOpenState = atom({
  key: 'isAddModalOpen',
  default: false,
});

export const isDetailModalOpenState = atom({
  key: 'isDetailModalOpen',
  default: false,
});


export const selectedRestaurantIdState = atom({
  key: 'selectedRestaurantId',
  default: '',

});

export const selectedCategoryState = atom({
  key: 'selectedCategory',

  default: '전체',

});
