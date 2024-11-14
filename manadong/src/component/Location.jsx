import React from "react";

function Location({ location, desc }) {
  return (
    <div class="flex flex-row items-center md:gap-5 bg-white w-90 h-full md:w-2/4 md:h-60 p-3 rounded-xl border">
      <div class="hidden md:w-10 md:h-10 md:bg-[#FABDB9] md:items-center md:flex md:justify-center md:rounded-lg">
        <img src="/asset/png/pin.png" />
      </div>

      <div class="flex flex-col items-start justify-center">
        <p class="text-lg mx-2 font-bold items-start flex text-[#004688]">
          {location}
        </p>
        <p class="text-lg mx-2 font-normal text-black">{desc}</p>
        <p class="text-lg mx-2 font-semibold underline text-[#D72F24]">
          View Map
        </p>
      </div>
    </div>
  );
}
export default Location;
