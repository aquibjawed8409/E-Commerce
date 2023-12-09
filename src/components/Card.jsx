import { NavLink } from "react-router-dom";
import IndianPrice from "../Helper/IndianPrice";

const Card = ({ id, name, image, price, category }) => {
  return (
    <div className="flex ">
      <NavLink to={`/singleproduct/${id}`}>
        <figure className="relative">
          <img src={image} alt={name} className="w-[14rem] h-[10rem] md:w-[13rem] "/>
          <figcaption className="absolute text-1xl top-[15px] right-[10px] bg-white py-1 px-4 rounded-full">
            {category}
          </figcaption>
        </figure>
        <div className="flex justify-between my-3 text-1xl flex items-center flex-col sm:flex-row">
          <p>{name}</p>
          <p>
            <IndianPrice price={price} />
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
