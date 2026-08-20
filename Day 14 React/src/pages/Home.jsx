import React, { useContext, useEffect } from "react";
import { MyStore } from "../Context/MyContext";
import axios from "axios";

import { FaStar, FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import ProductCard from "../components/ProductCard";

const Home = () => {

  // Context se products array le rahe hain
  const { product, setProducts } = useContext(MyStore);

  // API call
  const getProduct = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);

    } catch (error) {
      console.log("API Error " , error);
    }
  };

  // Component load hote hi API call
  useEffect(() => {
    getProduct();
  }, []);

 return (
    <div className="flex flex-wrap justify-around py-8 bg-red-50">
        {product.map((item) => {
        return <ProductCard key={item.val} product={item} />
    })}
    </div>
 )
};

export default Home;