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
  oldPrice: string;
  name: string;
  img: string[];
  marcers: IMarcers;
  description: string;
  count: number;
  type: "tattoo-kits" | "holders" | "tattoo-machine" 
  | "wires" | "paints" | "power" | "tattoo-tips" | 
  "tattoo-needles" | "consumables" | "accessories" | "printers";
}


