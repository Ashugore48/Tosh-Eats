import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import isUserLoggedIn from "./isUserLoggedIn";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleRemoveFromCart = (index) => {
    dispatch(removeItem(index));
  };

  // Check if the user is logged in
  const loggedIn = isUserLoggedIn();

  return (
    <div className="flex flex-col items-center mt-20 min-h-screen bg-gray-100">
      <h1 className="font-bold text-5xl pt-5">Cart Items </h1>
      <br />
      {loggedIn ? (
        <ul className="flex flex-wrap max-w-screen-lg gap-5 pb-9">
          {cartItems.map((cartItem, index) => (
            <div className="w-80 shadow-lg pr-5 pl-5 p-7">
              <li key={index}>
                <img className="p-1 rounded-lg" src={cartItem.item.image} />
                <p className="font-bold text-lg">Item: {cartItem.item.item}</p>
                <p className="">Quantity: {cartItem.quantity}</p>
                <p className="">Price: {cartItem.item.price}</p>
                <p className="">ETA: {cartItem.item.ETA}</p>
                <button
                  className="py-1 px-2 bg-red-500 hover:bg-red-700 text-white rounded"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </button>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <p className="text-red-500 my-52 font-bold text-4xl">
            Please log in to view your cart.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
