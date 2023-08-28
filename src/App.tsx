import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { BasketContext, IBasket } from "./context/basketContext";
import { FavoriteContext, IFavorite } from "./context/favoriteContext";
import AppRouter from "./components/appRouter/AppRouter";

function App() {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);
  const [basket, setBasket] = useState<IBasket[]>([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <FavoriteContext.Provider value={{ favorites, setFavorites }}>
        <AppRouter />
      </FavoriteContext.Provider>
    </BasketContext.Provider>
  );
}

export default App;
