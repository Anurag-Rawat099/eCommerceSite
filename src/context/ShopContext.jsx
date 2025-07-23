import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [cartItem, setCartItem] = useState({});
  const addToCart = (itemId, size) => {
    if (!size) {
      alert("select the size");
      return;
    }
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    }else{
      cartData[itemId]={}
      cartData[itemId][size]=1;
    }

  };
useEffect(()=>{
  console.log(cartItem);
})
const value = {
    products,
    currency,
    deliveryFee,
    addToCart,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider; 
