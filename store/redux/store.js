import { configureStore, createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.ids.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.ids.splice(state.ids.indexOf(payload), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const getFavoriteMealIds = ({ favoriteMeals }) => favoriteMeals.ids;

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteSlice.reducer,
  },
});
