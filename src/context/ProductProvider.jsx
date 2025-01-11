import React, { useEffect, useState } from "react";
import { categoryItems } from "../components/index";

export const productContext = React.createContext();

// deaulft cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < categoryItems.length + 1; i++) {
    cart[i] = {
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0
    };
  }
  return cart;
};

const ProductProvider = ({ children }) => {

  // fav items
  const [favouriteItems, setFavouriteItems] = useState(()=>{
    const savedFavItems=localStorage.getItem("favouriteItems");
    return savedFavItems? JSON.parse(savedFavItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("favouriteItems", JSON.stringify(favouriteItems));
  }, [favouriteItems]);

// cartitems
  const [cartItems, setCartItems] = React.useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : getDefaultCart();
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

// selected size 
  const [selectedSize, setSelectedSize] = React.useState(() => {
    const savedSelectedSize = localStorage.getItem("selectedSize");
    return savedSelectedSize ? JSON.parse(savedSelectedSize) : 5; // Default size
  });
  useEffect(() => { localStorage.setItem("selectedSize", JSON.stringify(selectedSize)); }, [selectedSize]);

// search state 
const [quary,setQuary]=useState("");
const [filteredItems,setFilteredItems]=useState([]);

const handleSearch=(quary)=>{
 setQuary(quary);
 if(quary){
  const filteredItems = categoryItems.filter((item) => item.name.toLowerCase().includes(quary.toLowerCase())
);
setFilteredItems(filteredItems);
 }else{
  setFilteredItems([]);
 }
}


// add to cart
  const addToCart = (itemId, selectedSize) => {
    setSelectedSize(selectedSize);
    setCartItems((prevItems) => {
      return {
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          [selectedSize]: (prevItems[itemId][selectedSize] || 0) + 1
        }
      };
    });
  };

  // remove cart 
  const removeFromCart = (itemId, selectedSize) => {
    setCartItems((prevItems) => {
      return {
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          [selectedSize]: prevItems[itemId][selectedSize] - 1
        }
      };
    });
  };

  // add to favourite
  const addToFavourite = (itemId) => {
    setFavouriteItems((prevItems) => {
      if (!prevItems.includes(itemId)) {
        return [...prevItems, itemId];
      }
      return [...prevItems];
    });
    
  }
  const removeFromFavourite = (itemId) => {
    setFavouriteItems((prevItems) => {
      return prevItems.filter((id) => id !== itemId);
    });
  };

  // total items
  const totalItems = () => {
    let total = 0;
    categoryItems.forEach(item => {
      if (cartItems[item.id] && cartItems[item.id][selectedSize] > 0) {
        total += cartItems[item.id][selectedSize];
      }
    });
    return total;
  };

  const productValue = {
    cartItems,
    addToCart,
    removeFromCart,
    selectedSize,
    setSelectedSize
    , totalItems,
    favouriteItems,
    addToFavourite,
    removeFromFavourite,
    quary,
    handleSearch,
    filteredItems

  };

  return (
    <productContext.Provider value={productValue}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
