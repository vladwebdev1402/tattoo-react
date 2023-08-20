import React, { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ContainerBriefInfoProduct from "../../components/containerBriefInfoProduct/ContainerBriefInfoProduct";
import ContainerImagesProduct from "../../components/containerImagesProduct/ContainerImagesProduct";
import Сharacteristics from "../../components/characteristics/Сharacteristics";
import { minishopData } from "../../data/minishopData";
import { IShopItem } from "../../types/shopItem";
import st from "./ItemPage.module.scss";
import SubBlockItems from "../../components/subBlockItems/SubBlockItems";
import ShopItem from "../../components/ShopItem/ShopItem";
import MoreItemsMoreDiscount from "../../components/moreItemsMoreDiscount/MoreItemsMoreDiscount";
const ItemPage: FC = () => {
  const params = useParams<{ id: string }>();
  const [item, setItem] = useState<IShopItem>();

  useEffect(() => {
    setItem(minishopData.filter((item) => item.id === Number(params.id))[0]);
  }, [params]);

  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [item]);

  if (item) {
    return (
      <div className={st.containerPage}>
        <Breadcrumbs
          params={true}
          nameParams={item.name}
          className={st.breadcrumbs}
        />

        <div className={st.itemNameTxt}>{item.name}</div>
        <div className={st.imagesAndBriefInfo}>
          <ContainerImagesProduct
            images={item.img}
            marcers={item.marcers}
            id={item.id}
          />
          <ContainerBriefInfoProduct item={item} />
        </div>
        <div className={st.fullInfoContainer}>
          <div className={st.descriptionContainer}>
            <div className={st.titleBlock}>Описание</div>
            <div className={st.descriptionBlock}>
              {item.description.split("/").map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>
          </div>
          {item.characteristics && (
            <div className={st.characteristicContainer}>
              <div className={st.titleBlock}>Характеристики</div>
              <Сharacteristics characteristics={item.characteristics} />
            </div>
          )}
        </div>
        <MoreItemsMoreDiscount />

        <SubBlockItems title="Рекомендованные товары" watchAll={() => {}}>
          {minishopData.map((item) => (
            <ShopItem item={item} key={item.id} smallItem={true} />
          ))}
        </SubBlockItems>
        <SubBlockItems title="Товары этого бренда" watchAll={() => {}}>
          {minishopData.map((item) => (
            <ShopItem item={item} key={item.id} smallItem={true} />
          ))}
        </SubBlockItems>
        <SubBlockItems title="Похожие товары" watchAll={() => {}}>
          {minishopData.map((item) => (
            <ShopItem item={item} key={item.id} smallItem={true} />
          ))}
        </SubBlockItems>
      </div>
    );
  }

  return <></>;
};

export default ItemPage;
