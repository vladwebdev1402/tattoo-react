import React, { Dispatch, SetStateAction } from "react";
import { IShopItem } from "../types/shopItem";
export interface IFavorite {
    id?: number;
}

export interface IFavoriteContext {
    favorites: IFavorite[],
    setFavorites: Dispatch<SetStateAction<IFavorite[]>>;
}

export const FavoriteContext = React.createContext<IFavoriteContext>({
    favorites: [],
    setFavorites: () => {}
});

export const findFavorite = (favorites: IFavorite[], id: number) : boolean => {
    return Boolean(favorites.filter(item => item.id === id).length)
}

export const deleteFavorite = (favorites: IFavorite[], id: number) : IFavorite[] => {
    return favorites.filter(item => item.id !== id)
} 

export const clickFavorite = (setFavorites: Dispatch<SetStateAction<IFavorite[]>>, favorites: IFavorite[], item: IShopItem) => {
    if (findFavorite(favorites, item.id)) {
      setFavorites(deleteFavorite(favorites, item.id));
    } else {
      setFavorites([...favorites, { id: item.id }]);
    }
  };