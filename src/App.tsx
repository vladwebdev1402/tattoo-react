import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { BasketContext } from "./context/basketContext";
import { FavoriteContext, IFavorite } from "./context/favoriteContext";
import AppRouter from "./components/appRouter/AppRouter";

function App() {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      <AppRouter />;
    </FavoriteContext.Provider>
  );
}

export default App;
