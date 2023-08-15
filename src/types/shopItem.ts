export interface IMarcers {
  new?: boolean;
  hot?: boolean;
  promotion?: boolean;
  discount?: boolean;
  no?: boolean;
}


export interface IShopItem {
  id: number;
  price: string;
  name: string;
  img: string[];
  marcers: IMarcers;
  description: string;
  count: number;
}


