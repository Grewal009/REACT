import { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import TotalAmt from "./TotalAmt";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import emptyCart from "../assets/images/empty-cart.gif";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.total);
  console.log("cartItems ", cartItems);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <CartCard item={item} key={item?.id} />
        ))}
      </div>
      {cartItems.length === 0 ? (
        <div className="my-10 flex flex-col justify-center items-center">
          <h1 className="text-lg font-bold">Your Cart is Empty.</h1>
          <img
            src={emptyCart}
            className="w-[320px] sm:w-[500px] lg:w-[700px]"
          />
        </div>
      ) : (
        <div className="my-5 flex flex-col justify-center items-center">
          <hr className="w-full border border-slate-400 mb-5 bg-slate-300" />

          {
            //<p>Total Price: {totalPrice}/-</p>
          }

          <button
            onClick={() => handleClearCart()}
            className="my-4 px-2 py-1 font-bold rounded-md bg-slate-300 hover:bg-slate-400"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
