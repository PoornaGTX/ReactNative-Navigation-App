import { configureStore } from "@reduxjs/toolkit";

import faavoriteReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    favorieMeals: faavoriteReducer,
  },
});
