import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/tamboSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [prodQuantity, setProdQuantity] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);
  return (
    <div>
      <div className="  grid grid-cols-1 md:grid-cols-2">
        <div className="w-full  relative  justify-center px-1">
          <img
            className="w-screen h-[350px] md:h-[550px] object-cover"
            alt="productImg"
            src={details.image}
          />
          <div className="absolute top-4 right-1">
            {details.isNew && (
              <p className="bg-black text-white  font-semibold font-titleFont px-8 py-1 ">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-full  justify-center gap-5 md:gap-12 p-2 md:p-10 ">
          <div className="pt-1 md:pt-5">
            <h2 className="text-4x1 font-bold">{details.title}</h2>
            <div className="flex items-center  gap-4 mt-3">
              <p className="line-through font-base text-gray-500">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-sm md:text-base  text-gray-500 mt-3  pt-2 md:pt-5">
            {details.description}
          </p>
          <div className="grid gap-4 pt-6 justify-center md:justify-start">
            <div className="w-52 flex items-center  text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold ">
                <button
                  onClick={() =>
                    setProdQuantity(
                      prodQuantity === 1 ? (prodQuantity = 1) : prodQuantity - 1
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{prodQuantity}</span>
                <button
                  onClick={() => setProdQuantity(prodQuantity + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: prodQuantity,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800 m-2 rounded-md"
            >
              add to cart
            </button>
          </div>
          <p className="text-sm md:text-base text-gray-500 p-2 left-1 ">
            Category:
            <span className="font-medium capitalize"> {details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Product;
