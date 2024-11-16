import React, { useState, useEffect } from "react";

function Eatery() {
  const [dots, setDots] = useState("!");

  useEffect(() => {
    const dotStates = ["!", "!!", "!!!", "", "!"];
    let index = 0;

    const interval = setInterval(() => {
      setDots(dotStates[index]);
      index = (index + 1) % dotStates.length;
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="overflow-x-hidden h-screen flex justify-center items-center">
      <div className="flex flex-col items-center md:items-start">
        <p className="text-3xl font-semibold text-[#004688]">
          Page Coming Up Soon{dots}
        </p>
        <div className="bg-[#D72F24] my-2 w-12 h-1"></div>
      </div>
    </div>
  );
}
export default Eatery;
