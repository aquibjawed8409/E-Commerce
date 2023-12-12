import React, { useContext, useState } from "react";
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
import { CartContext } from "./context/CartContext";

const singleUrl = `https://api.pujakaitem.com/api/products`;

const SingleProduct = () => {
  const [clickColor, setClickColor] = useState(null);
  const [selectQty, setSelectQty] = useState(1);

  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { getSingleProducts, isLoading, singleProduct } =
    useContext(AppContext);

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
    colors,
  } = singleProduct;

  useEffect(() => {
    getSingleProducts(`${singleUrl}?id=${id}`); // This id is from useParams
  }, []);

  if (isLoading) {
    return <div>... Loading</div>;
  }

  // Get the click color from Colors Component
  const getClickColor = (color) => {
    setClickColor(color);
  };

  // Get the Qty from QtySelect Component
  const getSelectQty = (qty) => {
    setSelectQty(qty);
  };

  return (
    <div className="">
      <div className="bg-[rgb(211,211,211)] capitalize text-2xl py-2 px-3">
        {/* Page Navigation */}
        <PageNavigation /> / {name}
      </div>

      <div className="grid md:grid-cols-2 my-9 w-[100%] md:w-[95%] lg:w-[75%] m-auto gap-8">
        {/* Image */}
        <div>
          <ProductImage img={image} />
        </div>

        {/* About product */}
        <div className="text-[16px]  flex flex-col gap-3 px-3">
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
          <div className="flex gap-3">
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
          <p className="flex items-center gap-3 ">
            Color Available :{" "}
            {stock > 0 ? (
              <Colors color={colors} getColorSelect={getClickColor} />
            ) : (
              "Stock not Available"
            )}
          </p>

          {/* Qty Selection */}
          <QtySelect qty={stock} getQtySelect={getSelectQty} />

          {/* Add to Cart Button */}
          <NavLink
            to="/cart"
            onClick={() => {
              addToCart(id, singleProduct, clickColor, selectQty);
            }}
          >
            <button className="bg-[#3273dc] px-3 py-2 text-white">
              Add to Cart
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
