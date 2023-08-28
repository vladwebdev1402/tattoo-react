import React from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { IShopItem } from "../types/shopItem";
export interface IBasket {
    itemId: number;
    count: number;
    item: IShopItem;
}

export interface IBasketContext {
    basket: IBasket[];
    setBasket: Dispatch<SetStateAction<IBasket[]>>;
}
export const BasketContext = React.createContext<IBasketContext>({
    basket: [],
    setBasket: () => {}
});

export const getCountItemInBasket = (basket: IBasket[], id: number) : number=> {
    return basket.filter(basketItem => basketItem.itemId === id)[0]?.count
}

export const removeFromBasket = (setBasket: Dispatch<SetStateAction<IBasket[]>>, basket: IBasket[], id: number) : void => {
    setBasket([...basket.filter(basketItem => basketItem.itemId != id)])
}

export const setCountItemsInBasket = (setBasket: Dispatch<SetStateAction<IBasket[]>>, basket: IBasket[], 
    item: IShopItem, count: number) : void => {
        setBasket([...basket.filter(basketItem => basketItem.itemId != item.id), 
            {itemId: item.id, count: count, item: item }])
}