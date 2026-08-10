import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { MyStore } from "./context/MyContex";
import AddCart from "./Pages/AddCart.jsx";

const App = () => {
  const [products, setProducts] = useState([]);

  // API se products fetch karna
  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    setProducts(res.data);
  };

  // Component mount hone par API call
  useEffect(() => {
    getProducts();
  }, []);

  // Context se cart state lena
  const { isOpenCart } = useContext(MyStore);

  return (
    <div>
      <Navbar />

      {isOpenCart ? (
        // Cart screen
        <AddCart />
      ) : (
        // Products screen
        <div className="flex flex-wrap justify-evenly gap-10 py-5 bg-red-950">
          {products.map((items) => (
            <Product product={items} key={items.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
