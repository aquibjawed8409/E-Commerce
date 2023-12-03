import React, { useContext } from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { FilterContext } from "./context/FilterContext";

const Products = () => {
  const { filter_products } = useContext(FilterContext);
  // console.log(filter_products)
  return (
    <div className="w-[80%] m-auto mt-8">
      <div className="flex">
        <div className="bg-gray-200 mr-4">
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
