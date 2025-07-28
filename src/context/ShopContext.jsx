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
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1;
    }
     setCartItem(cartData)
  };
 


  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (item in cartItem[items]) {
        try {
          if (cartItem[items][item > 0]) {
            totalCount += cartItem[items][item]
          }
        }
        catch (error) { }
      }
    }
    return totalCount;
  }

  useEffect(() => {
    console.log(cartItem);
  })
  const value = {
    products,
    currency,
    deliveryFee,
    cartItem,addToCart,getCartCount
  };
  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>;
};

export default ShopContextProvider; 
