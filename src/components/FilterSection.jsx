import React, { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { TiTick } from "react-icons/ti";
import IndianPrice from "../Helper/IndianPrice";
import { CgMenu, CgClose } from "react-icons/cg";


const FilterSection = () => {
  const {
    updateFilterData,
    filters: { color, minPrice, maxPrice, price, text } ={},
    all_products,
    clearFilter,
  } = useContext(FilterContext);
  // console.log(text)

  const [clickCategory, setClickcategory] = useState(null);


  // Get Unique Data Category wise
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))]);
    } else {
      return (newVal = ["All", ...new Set(newVal)]);
    }
  };

  // Global function of category wise
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorData = getUniqueData(all_products, "colors");

  return (
    <div className="relative">
      <div className="p-5 hidden md:block">
        {/* <CgClose className="hidden"/> */}
    <CgMenu className="absolute top-0 right-[-22px] text-2xl"/>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterData}
          placeholder="Search..."
          className="border-1px bg-gray-300 p-1 outline-1px border-[1px]"
        />
      </form>
      {/* Category Filter */}
      <div className="flex flex-col items-start">
        <h2 className="text-[1.3rem] text-bold my-3">Category</h2>
        <div className="flex flex-col gap-3">
          {categoryData.map((elem, i) => {
            return (
              <button
                key={i}
                type="submit"
                name="category"
                value={elem}
                onClick={() => {
                  updateFilterData({
                    target: { name: "category", value: elem },
                  });
                  setClickcategory(elem);
                }}
                style={{ color: clickCategory === elem ? "blue" : "" }}
              >
                {elem}
              </button>
            );
          })}
        </div>
      </div>
      {/* Company Filter */}
      <div className="mt-3">
        <h2 className="text-[1.3rem] text-bold my-3">Company</h2>
        <form action="#">
          <label htmlFor="company">
            <select name="company" id="company" onClick={updateFilterData}>
              {companyData.map((curElem, i) => {
                return (
                  <option key={i} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>

      {/* Color Filter */}
      <div>
        <h2 className="text-[1.3rem] text-bold my-3">Colors</h2>
        <div className="flex gap-0">
          {colorData.map((curColor, i) => {
            if (curColor === "All") {
              return (
                <button
                  key={i}
                  name="color"
                  value={curColor}
                  onClick={updateFilterData}
                  className="rounded-[50%] w-6 h-6 mr-2"
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={i}
                name="color"
                value={curColor}
                onClick={updateFilterData}
                style={{ backgroundColor: curColor }}
                className="rounded-[50%] w-6 h-6 mr-2"
              >
                {curColor === color && <TiTick className="ml-1 text-white" />}
              </button>
            );
          })}
        </div>
      </div>
      {/* Price Range Filter */}
      <div>
        <h2 className="text-[1.3rem] text-bold my-3">Price</h2>
        <div>
          <p>
            <IndianPrice price={price} />
          </p>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            name="price"
            value={price}
            onChange={updateFilterData}
          />
        </div>
      </div>

      {/* Clear Filter */}

      <div className="mt-8 flex justify-center">
        <button
          className="bg-[#3273dc] px-3 py-2 text-white"
          onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>
    </div>
    </div>
  );
};

export default FilterSection;