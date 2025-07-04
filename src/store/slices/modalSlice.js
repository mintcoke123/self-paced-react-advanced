import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddModalOpen: false,
  isDetailModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setAddModalOpen: (state, action) => {
      state.isAddModalOpen = action.payload;
    },
    setDetailModalOpen: (state, action) => {
      state.isDetailModalOpen = action.payload;
    },
  },
});

export const { setAddModalOpen, setDetailModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
