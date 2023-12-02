
import { NavLink } from "react-router-dom";
import IndianPrice from "../Helper/IndianPrice";

const Card = ({id, name, image, price, category, company}) => {
  return (
 <div className="flex">
       <NavLink to={`/singleproduct/${id}`}>
      <figure className="relative">
        <img src={image} alt={name} className="w-[15rem] h-[10rem] "/>
        <figcaption className="absolute top-[15px] right-[10px] bg-white py-1 px-4 rounded-full">{category}</figcaption>
      </figure>
      <div className='flex justify-between my-3'>
        <p>{name}</p>
        <p><IndianPrice price ={price}/></p>
      </div>
    </NavLink>
 </div>
  )
}

export default Card
