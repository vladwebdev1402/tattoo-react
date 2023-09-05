import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandImgHeader from "../../components/brandImgHeader/BrandImgHeader";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FilterCategoryCatalog from "../../components/filterCategoryCatalog/FilterCategoryCatalog";
import ShopItem from "../../components/ShopItem/ShopItem";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
import { brands } from "../../data/catalogCategory";
import { minishopData } from "../../data/minishopData";
import { ICategory } from "../../types/category";
import { IShopItem } from "../../types/shopItem";
import st from "./BrandPage.module.scss";
const BrandPage = () => {
  const params = useParams<{ id: string }>();
  const [brand, setBrand] = useState<ICategory>();
  const [currentType, setCurrentType] = useState("all");
  const [items, setItems] = useState<IShopItem[]>([]);
  const [filterItems, setFilterItems] = useState<IShopItem[]>([]);

  useEffect(() => {
    const brand = brands.filter((brand) => brand.id === Number(params.id))[0];
    setBrand(brand);
    setItems(minishopData.filter((item) => item.brand === brand.name));
    setFilterItems(minishopData.filter((item) => item.brand === brand.name));
  }, [params]);

  useEffect(() => {
    if (currentType == "all") setFilterItems(items);
    else setFilterItems(items.filter((item) => item.type === currentType));
  }, [currentType]);
  return (
    <div className={st.container}>
      <Breadcrumbs params={true} nameParams={brand?.name} />
      <BrandImgHeader img={brand?.img || ""} name={brand?.name || ""} />
      <FilterCategoryCatalog
        setType={setCurrentType}
        currentType={currentType}
      />
      <div className={st.itemsContainer}>
        {filterItems.length ? (
          filterItems.map((item) => <ShopItem item={item} key={item.id} />)
        ) : (
          <h1>Товары этой категории от данного бренда отсутствуют</h1>
        )}
      </div>
      {filterItems.length > 0 && (
        <ClipButton theme="light" onClick={() => {}} className={st.btn}>
          Показать ещё
        </ClipButton>
      )}
    </div>
  );
};

export default BrandPage;
