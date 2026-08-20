import React, { useContext } from 'react'
import ProductDetails from './ProductDetails'
import { MyStore } from '../Context/MyContext';

const Products = () => {
  const {singleProduct} = useContext(MyStore);
  return (
    <div className='flex h-screen w-full items-center justify-center text-3xl font-bold'>
      {singleProduct.map((item) => {
        return <ProductDetails product={item} />
      })}
    </div>
  )
}

export default Products
