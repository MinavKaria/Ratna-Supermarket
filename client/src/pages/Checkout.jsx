import React from "react";
import Payment from "../components/Payment";
import { useNavigate } from "react-router-dom";
import { useCart } from "../actions/CartControl";
import { useState } from "react";
import axios from "axios";


function Checkout() {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useCart();
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.count,
    0
  );
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user.uid;
  console.log(userID);
  console.log(cartItems);

  return (
    <>
      <div className="mt-[150px] flex mx-auto w-full justify-center items-start h-[]">
        <div className="w-[300px] p-4 border rounded-md shadow-md flex flex-col gap-4">
          {!paymentSuccess && (
            <>
              <h1>Total Amount: ₹ {totalAmount}</h1>
              <Payment />
              <button
                className=" bg-red-500 text-white rounded-lg"
                onClick={async () => {
                  
                  try {
                    await axios.post(
                      "https://ratna-supermarket.vercel.app/orderItems",
                      { id: userID, order: cartItems ,orderStage:1},
                      { headers: { "Content-Type": "application/json" } }
                      
                    );

                    console.log("Order Placed");
                    setTimeout(() => {
                      navigate("/orders");
                    }, 3000);
                    setPaymentSuccess(true);
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                Payment Done for Demo{" "}
              </button>
            </>
          )}

          {paymentSuccess && (
            <>
              <img
                src="Animation - 1713010980986.gif"
                alt=""
                className="w-25"
              />
              Your Payment is Successful
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
