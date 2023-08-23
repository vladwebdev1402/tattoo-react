import { IContactPerson } from "./contactPerson";
import { IShopItem } from "./shopItem";

export interface IProductOrder {
    id: number;
    date: string;
    numberOrder: number;
    countProduct: number;
    sum: number;
    status: string;
    contactPerson: IContactPerson;
    products: {item: IShopItem, count: number}[];
}