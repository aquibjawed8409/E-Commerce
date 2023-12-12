import React, { useContext } from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { FilterContext } from "./context/FilterContext";

const Products = () => {
  const { filter_products } = useContext(FilterContext);
  return (
    <div className="w-[100%] m-auto mt-8 md:w-[90%]">
      <div className="flex">
        <div className="bg-gray-200 mr-4 z-50">
          <FilterSection />
        </div>
        <div className="flex flex-col gap-5">
          <Sort /> <ProductList filterProducts={filter_products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
