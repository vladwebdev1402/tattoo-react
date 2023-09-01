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
        if (!basket.length) setBasket([{item: item, count: count, itemId: item.id}])
        else if (!basket.filter(basketItem => basketItem.itemId === item.id).length) {
            setBasket([...basket, {count: 1, itemId: item.id, item: item}])
        }
        else 
        setBasket(basket.map(basketItem => {
            if (basketItem.itemId === item.id) {
                return {...basketItem, count: count};
            }
            return basketItem;
        }));
}

export const getSumBasket = (basket: IBasket[]) => {
    return basket.reduce((sum, basketItem) => sum += basketItem.item.price * basketItem.count, 0)
}

export const getCountItemsInBasket = (basket: IBasket[]) => {
    return basket.reduce((count, basketItem) => count += basketItem.count, 0)
}

