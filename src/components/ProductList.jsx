import React, { useContext } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { FilterContext } from "../context/FilterContext";

const ProductList = () => {
  const { filter_products, grid_view } = useContext(FilterContext);
  if (grid_view === true) {
    return <GridView filterProducts={filter_products} />;
  } else {
    return <ListView filterProducts={filter_products} />;
  }
};

export default ProductList;
