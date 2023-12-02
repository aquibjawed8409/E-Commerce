import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import ProductImage from "./components/ProductImage";
import IndianPrice from "./Helper/IndianPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import Stars from "./components/Stars";
import Colors from "./components/Colors";
import QtySelect from "./components/QtySelect";
import { NavLink } from "react-router-dom";

const singleUrl = `https://api.pujakaitem.com/api/products`;

const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id)
  const { getSingleProducts, isLoading, singleProduct } =
    useContext(AppContext);
  // console.log(singleProduct)

  const {
    name,
    id: alias,
    company,
    price,
    description,
    stock,
    reviews,
    stars,
    image,
    colors
  } = singleProduct;
  useEffect(() => {
    getSingleProducts(`${singleUrl}?id=${id}`);
  }, []);

  if(isLoading){
    return <div>... Loading</div>
  }

  return (
    <>
      <div className="bg-[rgb(211,211,211)] capitalize text-2xl py-2 px-3">
      {/* Page Navigation */}
        <PageNavigation /> / {name}
      </div>

      <div className="grid grid-cols-2 my-9 w-[70%] m-auto gap-8">
      {/* Image */}
        <ProductImage img={image} />
        {/* About product */}
        <div className="text-[16px]  flex flex-col gap-3">
          <h2 className="text-3xl">{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <p>
            <b>
              MRP :
              <del>
                <IndianPrice price={price + 250000} />
              </del>
            </b>
          </p>
          <p className="text-blue-800 text-bold">
            <b>
              Deal of the Day : <IndianPrice price={price} />
            </b>
          </p>
          <p>{description}</p>
          <div className="grid grid-cols-4 gap-3 ">
            <div className="flex items-center text-center gap-2 flex-col">
              <TbTruckDelivery /> <p>Free Delivery</p>
            </div>
            <div className="flex items-center text-center gap-2 flex-col">
              <TbReplace /> 30 Days Replacement
            </div>
            <div className="flex items-center text-center gap-2 flex-col">
              <TbTruckDelivery /> <p>Contact Free Delivery</p>
            </div>
            <div className="flex items-center text-center gap-2 flex-col">
              <RiSecurePaymentLine />
              <p>2 Years Warranty</p>
            </div>
          </div>
          <p>
            Available : <b>{stock > 0 ? "In Stock" : "Out of Stock"}</b>
          </p>
          <p>
            id : <b>{id}</b>
          </p>
          <p>
            Brand : <b>{company}</b>
          </p>
          <hr />
        {/* Colors Selection */}
        <p className="flex items-center gap-3 ">Color Available : {stock > 0 ? <Colors color = {colors}/> : "Stock not Available"}  </p>
        {/* Qty Selection */}
        <QtySelect qty = {stock}/>
        {/* Add to Cart Button */}
        <NavLink to="/cart">
        <button className="bg-[#3273dc] px-3 py-2 text-white">Add to Cart</button>
        </NavLink>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
