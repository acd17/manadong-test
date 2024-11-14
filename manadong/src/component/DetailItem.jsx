import React from "react";

function DetailItem({ image, title, desc, harga }) {
  return (
    <div class="flex flex-col items-start justify-center bg-white w-90 h-1/3 p-3 rounded-xl">
      <img src={image} class="h-full w-full" />
      <p class="text-lg mt-5 font-bold items-start flex text-[#004688]">
        {title}
      </p>
      <p class="text-lg font-normal text-black">{desc}</p>
      <p class="text-lg font-normal text-[#D72F24]">{harga}</p>
    </div>
  );
}

export default DetailItem;
