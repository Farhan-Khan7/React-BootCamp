import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { MyStore } from "../Context/MyContext";
// import AddProducts from "../components/AddProducts";

const ProductDetails = () => {
  const { singleProduct, setSingleProduct } = useContext(MyStore);

  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      setSingleProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error in fetching single product", error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex w-220 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* ================= LEFT : IMAGE ================= */}
      <div className="flex w-2/5 items-center justify-center bg-gray-50 p-8">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="h-64 w-full object-contain transition duration-500 hover:scale-105"
        />
      </div>

      {/* ================= RIGHT : CONTENT ================= */}
      <div className="flex w-3/5 flex-col justify-between p-8">
        {/* Category */}
        <p className="mb-3 text-sm font-medium capitalize text-gray-500">
          {singleProduct.category}
        </p>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold leading-8 text-gray-900">
          {singleProduct.title}
        </h2>

        {/* Description */}
        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-500">
          {singleProduct.description}
        </p>

        {/* Rating */}
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-lg bg-yellow-50 px-3 py-1.5 text-sm font-semibold text-gray-800">
            ★ {singleProduct.rating?.rate}
          </span>

          <span className="text-sm text-gray-500">
            {singleProduct.rating?.count} Reviews
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-900">
            ${singleProduct.price}
          </span>
        </div>

        {/* Buy Now / Payment */}
        <button
          className="
          w-full rounded-xl
          bg-black px-6 py-3.5
          text-sm font-semibold text-white
          transition-all duration-300
          hover:bg-gray-800
          active:scale-[0.98]
        "
        >
          Buy Now & Pay
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
