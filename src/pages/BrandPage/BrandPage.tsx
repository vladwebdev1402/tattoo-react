import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BrandImgHeader from "../../components/brandImgHeader/BrandImgHeader";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FilterCategoryCatalog from "../../components/filterCategoryCatalog/FilterCategoryCatalog";
import ShopItem from "../../components/ShopItem/ShopItem";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
import { brands } from "../../data/catalogCategory";
import { minishopData } from "../../data/minishopData";
import st from "./BrandPage.module.scss";
const BrandPage = () => {
  const params = useParams<{ id: string }>();
  const brand = brands.filter((brand) => brand.id === Number(params.id))[0];
  const [currentType, setCurrentType] = useState("");
  return (
    <div className={st.container}>
      <Breadcrumbs params={true} nameParams={brand.name} />
      <BrandImgHeader img={brand.img || ""} name={brand.name} />
      <FilterCategoryCatalog
        setType={setCurrentType}
        currentType={currentType}
      />
      <div className={st.itemsContainer}>
        {minishopData.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
      <ClipButton
        theme="light"
        onClick={() => {}}
        text="Показать ещё"
        className={st.btn}
      />
    </div>
  );
};

export default BrandPage;
