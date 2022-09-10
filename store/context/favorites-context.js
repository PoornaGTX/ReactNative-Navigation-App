import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIDs, setFavoriteMealIDs] = useState([]);

  const addFavoriteMeal = (id) => {
    setFavoriteMealIDs([...favoriteMealIDs, id]);
  };

  const removeFavoriteMeal = (id) => {
    setFavoriteMealIDs((currentFavIDs) =>
      currentFavIDs.filter((mealId) => mealId !== id)
    );
  };

  const values = {
    ids: favoriteMealIDs,
    addFavorite: addFavoriteMeal,
    removeFavorite: removeFavoriteMeal,
  };

  console.log(favoriteMealIDs);

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
