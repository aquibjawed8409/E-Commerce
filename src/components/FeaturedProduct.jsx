import React, { useContext } from "react";
import { AppContext } from "../context/ProductContext";
import Card from "./Card";

const FeaturedProduct = () => {
  const { isLoading, Featureproducts } = useContext(AppContext);

  if (isLoading) {
    return <div className="w-[70%] m-auto">...Loading</div>;
  }
  return (
    <>
      <div className="bg-[rgb(230,230,250)] py-9 my-9 flex ">
        <div className="w-[70%] m-auto flex flex-col items-center">
          <p className="text-gray-500 mb-[-8px]">CHECK NOW</p>
          <h2 className="text-2xl font-bold mb-3 md:text-3xl">
            Our Feature Services
          </h2>
          <div className="grid grid-cols-1 mt-5 m-auto w-[90%] gap-8 sm:grid-cols-2 md:grid-cols-3">
            {Featureproducts.map((elem, i) => {
              return (
                <div key={elem.id}>
                  <Card  {...elem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedProduct;
