import React, { useContext } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MyStore } from "../context/MyContex";

const Product = ({ product }) => {
  const {cartItems, setCartItems} = useContext(MyStore);

  return (
    <div
      className="
        w-80
        bg-red-950
        rounded-2xl
        overflow-hidden
        border
        border-gray-200
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        group
      "
    >
      {/* ================= IMAGE SECTION ================= */}

      <div
        className="
          relative
          h-65
          bg-red-1000
          flex
          items-center
          justify-center
          p-6
        "
      >
        {/* Wishlist Button */}

        <button
          className="
            absolute
            top-4
            right-4
            w-10
            h-10
            rounded-full
            bg-red-950
            border-2
            flex
            items-center
            justify-center
            text-white
            shadow-md
            cursor-pointer
            hover:bg-red-900
            hover:text-white
            transition
            z-10
          "
        >
          <FiHeart size={19} />
        </button>

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.title}
          className="
            h-52
            w-52
            object-contain
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />
      </div>

      {/* ================= PRODUCT INFO ================= */}

      <div className="px-5 pt-5 pb-5">
        {/* Category */}

        <p
          className="
            h-5
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-red-800
          "
        >
          {product.category}
        </p>

        {/* Title */}

        <h2
          className="
            h-14
            mt-2
            text-lg
            font-bold
            leading-7
            text-gray-900
            line-clamp-2
          "
        >
          {product.title}
        </h2>

        {/* Description */}

        <p
          className="
            h-12
            mt-2
            text-sm
            leading-6
            text-gray-500
            line-clamp-2
          "
        >
          {product.description}
        </p>

        {/* ================= PRICE + RATING ================= */}

        <div
          className="
            h-12
            mt-4
            flex
            items-center
            justify-between
          "
        >
          {/* Price */}

          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          </div>

          {/* Rating */}

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              <FaStar size={14} className="text-yellow-500" />

              <span className="text-sm font-bold text-gray-800">
                {product.rating.rate}
              </span>
            </div>

            <span className="text-xs text-gray-400">
              {product.rating.count} reviews
            </span>
          </div>
        </div>

        {/* ================= ADD TO CART ================= */}

        <button

            onClick={() => setCartItems((prev) => [...prev , product])}
          className="
            w-full
            h-11
            mt-4
            rounded-lg
            bg-red-900
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            hover:bg-red-950
            cursor-pointer
            border-2
            border-red-900
            active:scale-95
            transition-all
            duration-200
          "
        >
          <FaShoppingCart size={15} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
