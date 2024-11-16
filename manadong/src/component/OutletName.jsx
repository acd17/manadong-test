import React from "react";

function OutletName({ location }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between">
        <p className="font-semibold text-black">{location}</p>
        <p className="flex flex-row gap-2 items-center text-[#D72F24] font-semibold hover:underline">
          Purchase Here
          <img
            src="/asset/png/arrow.png"
            className="w-5 h-5 transform scale-x-[-1]"
          />
        </p>
      </div>
      <div className="w-full border-t border-gray-300 my-4"></div>
    </div>
  );
}

export default OutletName;
