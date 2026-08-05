import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="h-[60vh] flex flex-col justify-center items-center">

          <h2 className="text-3xl font-bold text-gray-700">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Add some products to your cart.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-12 gap-8">

          {/* Left */}
          <div className="col-span-8 space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow border p-5 flex gap-6"
              >

                {/* Image */}
                <div className="w-36 h-36 bg-gray-100 rounded-lg flex justify-center items-center">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 object-contain"
                  />

                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">

                  <h2 className="font-bold text-xl line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 mt-2 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">

                    <h3 className="text-2xl font-bold text-green-600">
                      ${item.price}
                    </h3>

                    <button className="text-red-500 hover:text-red-700 text-xl">
                      <RiDeleteBin6Line />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Right */}
          <div className="col-span-4">

            <div className="bg-white rounded-xl shadow-lg border p-6 sticky top-6">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full mt-6 bg-slate-900 hover:bg-slate-700 text-white py-3 rounded-xl font-semibold duration-300">
                Proceed To Checkout
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;