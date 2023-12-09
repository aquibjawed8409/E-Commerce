import React, { useEffect, useState } from "react";

const ProductImage = ({ img = [{ url: "" }] }) => {
  // Above passing the default value of url because as we are using clickImage.url in the second div shows error
  const [clickImage, setClickImage] = useState(img[0]);

  // For first time render
  useEffect(() => {
    setClickImage(img[0]);
  }, [img]);
  // Check if img is defined and is an array
  if (!img || !Array.isArray(img)) {
    console.error("Invalid prop: img should be a defined array");
    return null;
  }

  return (
    <div className="flex flex-col gap-2 md:flex-row items-center">
      <div className="flex md:flex-col gap-2">
        {img.map((elem, i) => {
          return (
            <figure key={i} className="w-[5rem] md:w-[10rem]">
              <img
                src={elem.url}
                alt={elem.filename}
                onClick={() => setClickImage(elem)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd Image */}
      <div>
        <img
          src={clickImage.url}
          alt={clickImage.filename}
          className="h-[15rem]"
        />
      </div>
    </div>
  );
};

export default ProductImage;
