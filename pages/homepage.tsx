// import { count } from "console";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addtowishlist, removefromwishlist } from "./cartSlice";
import type { RootState } from "@/store";
const Homepage = () => {
  const count = useSelector((state: RootState) => state.wishlist.value)
const dispatch = useDispatch();
  return (
    <>
      <div className="nav">
        <p>Wishlist {count}</p>
      </div>

      <div className="product">
        <div className="product-image">
          <img
            src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="jeans"
          />
        </div>
        <div className="product-info">
          <h3>Jeans</h3>
          <p> $ 1500 </p>
          <button
            onClick={() => dispatch(addtowishlist())}
          >
            Add to Wishlist
          </button>
        </div>
        <button
            onClick={() => dispatch(removefromwishlist())}
        
        >Remove from Wishlist</button>

      </div>
    </>
  );
};

export default Homepage;
