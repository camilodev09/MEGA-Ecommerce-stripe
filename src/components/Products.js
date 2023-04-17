import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10 ">
      <div className="flex flex-col items-center gap-1 md:pt-6">
        <h1 className="text-xs md:text-2xl bg-black text-white py-2  w-30 md:w-100 text-center rounded-md p-3 md:p-5">
          Do you know how to choose your correct size?
        </h1>
        <span className="w-10 h-[2px] bg-black"></span>
        <p className="max-w-[500px] md:max-w-[700px] text-gray-600 text-center text-sm md:text-2xl p-2 md:p-6  md:pt-5 ">
          Remember that each brand has a different fit, so that your shopping
          experience is the best in our e-commerce, each product has its size
          chart.
        </p>
      </div>
      <div className="justify-center items-center flex w-full relative pt-7  bg-slate-100">
        <h2 className="font-bodyFont text 1xl md:text-2xl text-gray-900 pt-5 bg-slate-200 rounded-md p-1 px-4 top-20">
          FEATURED PRODUCTS
        </h2>
      </div>
      {/* =================== Products Start here ================= */}

      <div className=" max-w-screen-xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8 py-8 md:py-10 p-2  bg-slate-100 ">
        {products

          .filter(
            (item) =>
              item.isNew === true || item.price === 100 || item.price === 190
          )
          .map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
