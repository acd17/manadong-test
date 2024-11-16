import React from "react";
import OrderNow from "../component/OrderNow";

function Order() {
  return (
    <div class="overflow-x-hidden h-screen">
      <div className="flex flex-col items-center mx-5 md:mx-20">
        <div className="border border-[#004688] my-20 rounded-lg flex flex-row items-center w-full h-10 px-4">
          <button
            className="flex flex-row gap-2 items-center text-[#D72F24] font-semibold hover:underline"
            onClick={() => window.history.back()}
          >
            <img src="/asset/png/arrow.png" alt="Back" className="w-5 h-5" />
            Back
          </button>

          <div className="h-full border-l border-gray-300 mx-4"></div>

          <div className="flex flex-row items-center gap-2">
            <p className="font-semibold text-[#004688]">Home</p>
            <p className="font-light text-gray-400">/</p>
            <p className="font-semibold text-gray-700">Order Now</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start md:mx-40">
          <p className="text-3xl font-semibold text-[#004688]">
            Order Now On :
          </p>
          <div className="bg-[#D72F24] w-12 h-1"></div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center gap-20 my-20">
          <OrderNow image="/asset/png/GoFood.png" />
          <OrderNow image="/asset/png/Grab.png" />
          <OrderNow image="/asset/png/Shoope.png" />
        </div>
      </div>
    </div>
  );
}

export default Order;
