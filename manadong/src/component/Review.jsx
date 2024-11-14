import React from "react";

function Review({ name, desc }) {
  return (
    <div class="flex flex-col items-start justify-center bg-white w-36 h-fit mx-1 md:mx-0 md:w-1/3 md:h-60 p-2 rounded-xl">
      <p class="text-lg mx-2 font-bold items-start flex text-[#004688]">
        {name}
      </p>
      <p class="text-xs md:text-lg mx-2 font-normal text-black">{desc}</p>
    </div>
  );
}
export default Review;
