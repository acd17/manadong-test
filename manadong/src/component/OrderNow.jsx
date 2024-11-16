import React from "react";
import { useNavigate } from "react-router-dom";

function OrderNow({ image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/outlets");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <img src={image} className="h-72 w-72" alt="Product" />
      <button
        onClick={handleClick}
        className="text-white bg-[#004688] p-2 rounded-lg hover:bg-[#0C2A47]"
      >
        Order Now
      </button>
    </div>
  );
}

export default OrderNow;
