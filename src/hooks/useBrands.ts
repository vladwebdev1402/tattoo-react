import { IBrandItem } from "../types/brandItem";
import { useMemo } from "react";

export const useBrands = (brands: IBrandItem[]) => {
    const brandsGroup = useMemo(() => {
      let groups: Array<Array<IBrandItem>> = [];
      for (let i = 0; i < brands.length; i+=10) {
        groups.push(brands.slice(i, i+10));
      }
      return groups;
    }, [brands]);
  
    return brandsGroup as Array<Array<IBrandItem>>;
  };
  