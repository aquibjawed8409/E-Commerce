import React, { useContext } from "react";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FilterContext } from "../context/FilterContext";
import { CgMenu, CgClose } from "react-icons/cg";

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    sorting,
    updateFilterData,
    filters: { text },
  } = useContext(FilterContext);
  // min-w-[23rem] sm:min-w-[35rem] md:min-w-[55rem]
  return (
    <div className="flex flex-col gap-3">
      {/* Grid & List View */}
      <div className="flex justify-between flex-wrap px-3 min-w-[23rem] sm:min-w-[35rem] md:min-w-[27rem] ">
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
        <div>
          <p>{filter_products.length} Total Products</p>
        </div>
        <div className="border-[2px]">
          {/* Dropdown */}
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
        {/* <div className="absolute left-[0px] top-[50px] md:hidden">
          <CgMenu className="" />
        </div> */}

        <form action="#" onSubmit={(e) => e.preventDefault()} className="">
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterData}
            placeholder="Search..."
            className="border-1px bg-gray-300 p-1 outline-1px border-[1px] min-w-[250px]"
          />
        </form>
      </div>
    </div>
  );
};
// flex justify-between min-w-[800px]
export default Sort;
