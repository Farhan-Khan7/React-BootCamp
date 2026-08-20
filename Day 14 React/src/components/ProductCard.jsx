import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

  return (
    <div
      className="
        group
        flex
        h-fit
        w-80
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        mb-5
      "
    >
      {/* ================= IMAGE SECTION ================= */}

      <div
        className="
          relative
          flex
          h-60
          shrink-0
          items-center
          justify-center
          bg-red-50
          p-6
        "
      >
        {/* Wishlist Button */}
        <button
          className="
            absolute
            right-4
            top-4
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border-2
            border-red-900
            bg-red-950
            text-white
            shadow-md
            transition
            hover:bg-red-900
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
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* ================= PRODUCT INFO ================= */}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
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
            mt-2
            h-14
            overflow-hidden
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
            mt-2
            h-12
            overflow-hidden
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
            mt-auto
            flex
            h-12
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
        onClick={() => navigate(`/details/${product.id}`)}
          className="
            mt-4
            flex
            h-11
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border-2
            border-red-900
            bg-red-900
            font-semibold
            text-white
            transition
            hover:bg-red-950
            active:scale-95
          "
        >
          <FaShoppingCart size={15} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
