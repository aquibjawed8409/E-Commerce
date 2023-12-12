import React, { useContext } from "react";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FilterContext } from "../context/FilterContext";

const Sort = ({ toggleFilter }) => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    sorting,
    updateFilterData,
    filters: { text },
  } = useContext(FilterContext);
  return (
    <div className="flex flex-col gap-3">
      {/* Grid & List View */}
      <div className="flex justify-between gap-5 items-center flex-wrap px-3 min-w-[20rem] sm:min-w-[35rem] md:min-w-[27rem] ">
        <div className="flex gap-3">
          <button>
            <IoGrid
              onClick={setGridView}
              style={{
                backgroundColor: grid_view ? "rgb(211,211,211)" : "transparent",
              }}
              className="p-1 text-2xl"
            />
          </button>
          <FaList
            onClick={setListView}
            style={{
              backgroundColor: !grid_view ? "rgb(211,211,211)" : "transparent",
            }}
            className="p-1 text-2xl"
          />
        </div>

        {/* Total Filter Qty */}
        <div className="ml-5">
          <p>{filter_products.length} Total Products</p>
        </div>

          {/* Filter Button for Mobile */}
        <div className="flex md:hidden">
          <button className="bg-gray-200 px-4 py-1 rounded shadow" onClick = {toggleFilter}>FILTERS</button>
        </div>


        {/* Dropdown */}
        <div className="border-[2px] hidden md:block">
          <form action="#">
            <label htmlFor="sort">
              <select name="sort" id="sort" onClick={sorting}>
                <option value="lowest">Price (Lowest)</option>
                <option value="highest">Price (Highest)</option>
                <option value="a-z">Text (a-z)</option>
                <option value="z-a">Text (z-a)</option>
              </select>
            </label>
          </form>
        </div>
      </div>

      <div className="m-auto flex md:hidden">
        <form action="#" onSubmit={(e) => e.preventDefault()} className="">
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterData}
            placeholder="Search..."
            className="border-1px bg-gray-300 p-1 outline-1px border-[1px] min-w-[250px] bg-transparent shadow rounded "
          />
        </form>
      </div>
    </div>
  );
};
export default Sort;
