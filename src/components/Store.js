import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/tamboSlice";
import { ToastContainer, toast } from "react-toastify";

const Store = (clothes) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = clothes.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: clothes,
      },
    });
  };

  const [prods, setProds] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProds(data.data);
  }, [data]);

  return (
    <div className="w-screen grid grid-cols-2 md.grid-cols-3 lgl:grid-cols-4 bg-pink-100  gap-2 mx-1  px-5 md:px-20">
      {prods.map((clothes) => (
        <div key={clothes._id}>
          {
            <div>
              <div className=" group relative ">
                <div
                  onClick={handleDetails}
                  className="w-full h-40 md:h-96 cursor-pointer overflow-hidden  gap-5 md:pb-4"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-md md:rounded-lg"
                    src={clothes.image}
                    alt="productImg"
                  />
                </div>
                <div className="w-full h-20 border-[1px] px-2 py-1 md:py2  lgl:py-6 ">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h2 className=" font-titleFont text-xs md:text-base font-bold">
                        {clothes.title.substring(0, 15)}
                      </h2>
                    </div>
                    <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
                      <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                        <p className="line-through text-gray-500">
                          ${clothes.oldPrice}
                        </p>
                        <p className="font-semibold">${clothes.price}</p>
                      </div>
                      <p
                        onClick={() =>
                          dispatch(
                            addToCart({
                              _id: clothes._id,
                              title: clothes.title,
                              image: clothes.image,
                              price: clothes.price,
                              quantity: 1,
                              description: clothes.description,
                            })
                          ) & toast.success(`${clothes.title} is added`)
                        }
                        className="absolute z-20 md:z-50  w-[50px] md:w-[70px] text-xs md:text-base  text-gray-500 hover:text-gray-900 flex items-center  top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
                      >
                        add{" "}
                        <span>
                          <BsArrowRight />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p>{clothes.category}</p>
                  </div>
                  <div className="absolute top-4 right-0">
                    {clothes.isNew && (
                      <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
                        Sale
                      </p>
                    )}
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
                  theme="dark"
                />
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Store;
