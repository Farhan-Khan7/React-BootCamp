import React from "react";

const ProductCard = ({product , del}) => {

    

    // console.log(props)

  return (
    
      <div className="w-80 h-135 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        {/* Product Image */}
        <div className="h-60 bg-gray-300 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt="Product"
            className="h-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="p-5">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full mb-3">
            {product.category}
          </span>

          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2  h-15">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500 mt-3 line-clamp-3">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
            essentials with ease.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="font-medium">{product.rating.rate}</span>
              <span className="text-gray-400 text-sm font-bold">{product.rating.count} Reviews</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-bold text-green-600">₹ {product.price}</h3>

            <button onClick={()=> del(product.id)} className="cursor-pointer px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Delete Product
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
