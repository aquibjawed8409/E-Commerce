import React from "react";
import Card from "./Card";

const GridView = ({ filterProducts }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 sm:w-[100%] sm:m-auto">
        {filterProducts.map((curElem, i) => {
          return <Card key={i} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
