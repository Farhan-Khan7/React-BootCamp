import React, { useContext } from "react";
import {
    FaMinus,
    FaPlus,
    FaTrash,
    FaArrowLeft,
    FaShieldAlt,
} from "react-icons/fa";
import { MyStore } from "../context/MyContex";

const AddCart = () => {
    const { cartItems , setIsOpenCart } = useContext(MyStore);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <div className="max-w-6xl mx-auto">
                {/* ================= HEADER ================= */}

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-800">
                            Shopping Bag
                        </p>

                        <h1 className="mt-1 text-3xl font-bold text-gray-900">Your Cart</h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Review your selected products
                        </p>
                    </div>

                    <button

                    onClick={() => setIsOpenCart(false)}
                        className="
              hidden
              sm:flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-gray-600
              hover:text-red-900
              transition
            "
                    >
                        <FaArrowLeft size={13} />
                        Continue Shopping
                    </button>
                </div>

                {/* ================= MAIN ================= */}

                <div className="flex flex-col lg:flex-row gap-7 justify-between relative">
                    {/* ================= CART ITEMS ================= */}

                <div className="flex flex-col flex-1 gap-2 w-80 h-fit ">
                    {cartItems.map((items) => {
  return (
    <div
      key={items.id}
      className="
        bg-white
        rounded-xl
        border
        border-gray-200
        p-4
        shadow-sm
        flex
        gap-5
      "
    >

      {/* ================= PRODUCT IMAGE ================= */}

      <div
        className="
          w-32
          h-32
          shrink-0
          rounded-lg
          bg-gray-50
          flex
          items-center
          justify-center
        "
      >
        <img
          src={items.image}
          alt={items.title}
          className="
            w-24
            h-24
            object-contain
          "
        />
      </div>


      {/* ================= PRODUCT DETAILS ================= */}

      <div className="w-80 flex-1 min-w-0">

        {/* Category */}

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-red-800
          "
        >
          {items.category}
        </p>


        {/* Title */}

        <h2
          className="
            mt-2
            text-lg
            font-bold
            text-gray-900
            line-clamp-2
          "
        >
          {items.title}
        </h2>


        {/* Price */}

        <p className="mt-3 text-xl font-bold text-gray-900">
          ${items.price.toFixed(2)}
        </p>


        {/* ================= BOTTOM CONTROLS ================= */}

        <div className="mt-4 flex items-center justify-between">

          {/* Quantity UI */}

          <div
            className="
              flex
              items-center
              border
              border-gray-200
              rounded-lg
              overflow-hidden
            "
          >

            <button
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                text-gray-500
                hover:bg-gray-100
              "
            >
              <FaMinus size={10} />
            </button>


            <span
              className="
                w-9
                text-center
                text-sm
                font-semibold
                text-gray-800
              "
            >
              1
            </span>


            <button
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                text-gray-500
                hover:bg-gray-100
              "
            >
              <FaPlus size={10} />
            </button>

          </div>


          {/* Remove UI */}

          <button
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-400
              hover:text-red-800
              transition
            "
          >
            <FaTrash size={13} />

            Remove
          </button>

        </div>

      </div>

    </div>
  );
})}
                </div>

                    {/* ================= ORDER SUMMARY ================= */}

                    <div className="w-full lg:w-80 ">
                        <div
                            className="
                bg-white
                rounded-xl
                border
                border-gray-200
                p-6
                shadow-sm
                lg:sticky
                lg:top-5
              "
                        >
                            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

                            {/* Subtotal UI */}

                            <div className="mt-6 flex justify-between text-sm">
                                <span className="text-gray-500">Subtotal</span>

                                <span className="font-semibold text-gray-900">$109.95</span>
                            </div>

                            {/* Shipping UI */}

                            <div className="mt-4 flex justify-between text-sm">
                                <span className="text-gray-500">Shipping</span>

                                <span className="font-semibold text-green-600">Free</span>
                            </div>

                            {/* Divider */}

                            <div className="my-5 border-t border-gray-200" />

                            {/* Total UI */}

                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-700">Total</span>

                                <span className="text-2xl font-bold text-gray-900">
                                    $109.95
                                </span>
                            </div>

                            {/* Checkout Button */}

                            <button
                                className="
                  w-full
                  h-12
                  mt-6
                  rounded-lg
                  bg-red-900
                  text-white
                  font-semibold
                  hover:bg-red-950
                  transition
                "
                            >
                                Proceed to Checkout
                            </button>

                            {/* Secure Checkout */}

                            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
                                <FaShieldAlt size={12} />
                                Secure checkout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCart;
