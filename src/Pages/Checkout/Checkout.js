import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkout = useLoaderData();
  const { name, price } = checkout;

  const handleBuy = () => {
    toast.success("Purchess successfully");
  };
  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl mt-6 mb-28 md:ml-28">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">price: {price}$</p>
        <div className="card-actions justify-end">
          <button onClick={handleBuy} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
