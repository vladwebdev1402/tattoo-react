import React, { FC } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./catalogItem/CatalogItem";
import CatalogFooter from "./catalogFooter/CatalogFooter";
import { useNavigate } from "react-router-dom";
const Catalog: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.catalogContainer}>
      <h1 className={styles.catalogHeader}>Каталог</h1>

      <div className={styles.catalogBody}>
        <CatalogItem
          name="Тату наборы"
          onClick={() => navigate("/catalog/tatto-kits")}
        />
        <CatalogItem
          name="Держатели"
          onClick={() => navigate("/catalog/holders")}
        />
        <CatalogItem
          onClick={() => navigate("/catalog/tattoo-machine")}
          name="Тату машинки"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/wires")}
          name="Педали и провода"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/paints")}
          name="Краски"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/power")}
          name="Блоки питания"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/tattoo-tips")}
          name="Наконечники"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/tatto-needles")}
          name="Тату иглы"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/consumables")}
          name="Защита, ёмкости, расходники"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/accessories")}
          name="Аксессуары"
        />
        <CatalogItem
          onClick={() => navigate("/catalog/printers")}
          name="Принтеры и планшеты"
        />
      </div>
      <CatalogFooter />
    </section>
  );
};

export default Catalog;
