import React from "react";

function Review({ name, desc }) {
  return (
    <div class="flex flex-col items-start justify-center bg-white w-1/3 h-60 p-2 rounded-xl">
      <p class="text-lg mx-2 font-bold items-start flex text-[#004688]">
        {name}
      </p>
      <p class="text-lg mx-2 font-normal text-black">{desc}</p>
    </div>
  );
}
export default Review;
