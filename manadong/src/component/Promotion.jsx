import React from "react";

function Promotion({ image, title, desc }) {
  return (
    <div class="flex flex-col items-start justify-center bg-white h-72 w-36 md:w-full md:h-96 p-3 rounded-xl">
      <img src={image} class="h-full w-full" />
      <p class="text-lg mt-5 font-bold items-start flex text-[#004688]">
        {title}
      </p>
      <p class="text-xs md:text-lg font-normal text-black">{desc}</p>
    </div>
  );
}

export default Promotion;
