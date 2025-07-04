import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestaurants, addRestaurant } from '../../api/api';

export const fetchRestaurantsData = createAsyncThunk(
  'restaurant/fetchRestaurantsData',
  async (_, thunkAPI) => {
    try {
      const data = await getRestaurants();
      return data;
    } catch (error) {
      return alert('레스토랑 데이터를 불러오지 못했습니다.');
    }
  }
);

export const postRestaurantData = createAsyncThunk(
  'restaurant/postRestaurantData',
  async (newRestaurant, thunkAPI) => {
    try {
      await addRestaurant(newRestaurant);
      return newRestaurant;
    } catch (error) {
      return alert('레스토랑 데이터를 추가하지 못했습니다.');
    }
  }
);
