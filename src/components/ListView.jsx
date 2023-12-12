import React from "react";
import { NavLink } from "react-router-dom";
import IndianPrice from "../Helper/IndianPrice";

const ListView = ({ filterProducts }) => {
  return (
    <div className="flex flex-col gap-5 ">
      {filterProducts.map((curElem) => {
        const { id, name, image, description, price } = curElem;
        return (
          <div className="flex gap-5 border-[1px] p-3">
            <figure id={id}>
              <img src={image} alt={name} className="w-[20rem]" />
            </figure>
            <div className="flex flex-col gap-3 ">
              <p>{name}</p>
              <p>
                <IndianPrice price={price} />
              </p>
              <p>{description.slice(0, 90)}...</p>
              <NavLink to={`/singleproduct/${id}`}>
                <button className="bg-[rgb(211,211,211)] px-3 py-2">
                  READ MORE
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
