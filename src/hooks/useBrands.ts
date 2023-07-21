import { IBrandItem } from "../types/brandItem";
import { useMemo } from "react";

export const useBrands = (brands: IBrandItem[], countInGroup: number) => {
    const brandsGroup = useMemo(() => {
      let groups: Array<Array<IBrandItem>> = [];
      for (let i = 0; i < brands.length; i+=countInGroup) {
        groups.push(brands.slice(i, i+countInGroup));
      }
      return groups;
    }, [brands, countInGroup]);
  
    return brandsGroup as Array<Array<IBrandItem>>;
  };
  