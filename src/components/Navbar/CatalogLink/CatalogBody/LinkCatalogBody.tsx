import React, { FC, useState } from "react";
import { brands, category } from "../../../../data/catalogCategory";
import CategoryContainer from "./CategoryContainer";
import CategoryLink from "./CategoryLink";
import styles from "./LinkCatalogBody.module.scss";

interface Props {
  isVisible: boolean;
}
const LinkCatalogBody: FC<Props> = ({ isVisible }) => {
  const [isBrands, setIsBrands] = useState<boolean>(false);
  return (
    <div
      className={`${styles.catalogBody} ${isVisible && styles.active}`}
      style={{ width: `${isBrands ? "1183px" : ""}` }}
    >
      <div className={styles.catalogCategoryLinkContainer}>
        <CategoryLink
          onClick={() => setIsBrands(false)}
          isActive={!isBrands}
          name="По категории"
        />
        <CategoryLink
          onClick={() => setIsBrands(true)}
          isActive={isBrands}
          name="По брендам"
        />
      </div>
      <div
        className="horizontal-divider"
        style={{ backgroundColor: "var(--gray)" }}
      ></div>
      <CategoryContainer items={isBrands ? brands : category} />
    </div>
  );
};

export default LinkCatalogBody;
