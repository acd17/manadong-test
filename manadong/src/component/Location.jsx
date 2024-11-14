import React from "react";

function Location({ location, desc }) {
  return (
    <div class="flex flex-row items-center gap-5 bg-white w-2/4 h-60 p-3 rounded-xl border">
      <div class="w-10 h-10 bg-[#FABDB9] items-center flex justify-center rounded-lg">
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
