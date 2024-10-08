import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ProductContext } from "../Component/Context";
import { Button } from "../utils/Button";

function Cards({ items }) {
  const { img, productName, price, isAdded, isCart } = items;
  // console.log(isCart)

  const {addToWishlist } = useContext(ProductContext);

  return (
    <>
      <div className="w-[40%] mx-3 lg:mx-0 lg:w-[20%] flex flex-shrink-0 flex-col relative">
        <Link to={`/productpage/${productName}`}>
          <div className="card h-[25vh] lg:h-[45vh]  rounded-lg overflow-hidden border-[1px] border-[#838A60]">
            <img
              className="lg:w-full lg:h-full w-full h-full   object-cover  "
              src={img}
              alt=""
            />
           
          </div>
        </Link>
        <button
              onClick={()=>addToWishlist(productName)}
              className={`lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]  top-[2%] rounded-full ${
                isAdded  ? "bg-red-400" : " bg-slate-50"
              } left-[79%] absolute `}
            >
              <span className="flex items-center   lg:flex lg:items-center  lg:justify-center lg:mt-[2.2px] lg:ml-[1px]">
                <CiHeart   color="black" size="2em" />
              </span>
            </button>

        <div className="details   mt-5">
          <h2 className="text-md font-[Poppins] font-bold leading-none tracking-tight">
            {productName}
          </h2>

          <h4 className="text-md mt-2 font-bold font-[Poppins]">${price}</h4>

          <Button isCart={isCart} productName={productName} />
        </div>
      </div>
    </>
  );
}

export default Cards;
