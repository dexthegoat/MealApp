import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [ids, setIds] = useState([]);

  const addFavorite = (id) => {
    setIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value = {
    ids,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
