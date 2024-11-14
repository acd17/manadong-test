import React from "react";

function Item({ image, name }) {
  return (
    <div class="flex flex-col items-center justify-center">
      <img src={image} class="h-full w-full" />
      <p class="text-lg font-semibold text-black">{name}</p>
    </div>
  );
}

export default Item;
