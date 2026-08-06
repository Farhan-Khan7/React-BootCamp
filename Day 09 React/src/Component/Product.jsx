import React, { useContext } from "react";
import { MyShop } from "../Context/Context";

const Product = ({ product }) => {

  const {setCardItems}  = useContext(MyShop);

  return (
    <div className="group w-80 rounded-2xl bg-white shadow-md hover:shadow-2xl duration-300 overflow-hidden border border-gray-200 flex flex-col">

      {/* Image */}
      <div className="h-64 bg-slate-100 flex justify-center items-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain group-hover:scale-110 duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Category & Rating */}
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>

          <span className="bg-yellow-100 text-yellow-700 text-sm px-2 py-1 rounded-full">
            ⭐ {product.rating.rate}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-lg font-bold h-14 overflow-hidden">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 h-20 overflow-hidden">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-auto">

          <div className="flex justify-between items-center mt-5">

            <div>
              <p className="text-xs text-gray-400">
                Price
              </p>

              <h3 className="text-2xl font-bold text-green-600">
                ${product.price}
              </h3>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">
                Reviews
              </p>

              <h3 className="font-semibold">
                {product.rating.count}
              </h3>
            </div>

          </div>

          <button onClick={() => setCardItems((prev) => [...prev , product])} className="w-full mt-5 bg-slate-900 hover:bg-slate-700 text-white py-3 rounded-xl font-semibold duration-300">
            🛒 Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;