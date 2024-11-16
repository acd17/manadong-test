import React from "react";
import OutletName from "../component/OutletName";

function Outlets() {
  return (
    <div class="OrderPage overflow-x-hidden h-screen">
      <div className="flex flex-col md:items-start mx-5 md:mx-20">
        <div className="border border-[#004688] my-20 rounded-lg flex flex-row items-center w-full h-10 px-4">
          <button
            className="flex flex-row gap-2 items-center text-[#D72F24] font-semibold hover:underline"
            onClick={() => window.history.back()}
          >
            <img src="/asset/png/arrow.png" alt="Back" className="w-5 h-5" />
            Back
          </button>

          <div className="h-full border-l border-gray-300 mx-4"></div>

          <div className="flex flex-row items-center md:gap-2">
            <p className="font-semibold text-[#004688]">Home</p>
            <p className="font-light text-gray-400 ">/</p>
            <p className="font-semibold text-[#004688]">Order Now</p>
            <p className="font-light text-gray-400">/</p>
            <p className="font-semibold text-gray-700">GrabFood Outlet</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="text-3xl font-semibold text-[#004688]">
            GrabFood Outlet
          </p>
          <div className="bg-[#D72F24] w-12 h-1"></div>
        </div>

        <div className="flex flex-col md:flex-row my-10 w-full gap-10 overflow-y-hidden">
          <div className="flex flex-col items-start justify-center  gap-5 md:w-1/2">
            <OutletName location="Senopati, Petogongan" />
            <OutletName location="Kebun Jeruk/Tanjung Duren" />
            <OutletName location="Food Plaza PIK" />
            <OutletName location="Kuningan - D'Kanteen" />
            <OutletName location="Bintaro, Thelapah Square" />
            <OutletName location="Gaidng Serpong" />
            <OutletName location="Cipete" />
            <OutletName location="Menteng" />
          </div>
          <img src="/asset/png/percumian.png" className="md:w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default Outlets;
