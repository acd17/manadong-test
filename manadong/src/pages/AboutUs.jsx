import React from "react";

function AboutUs() {
  return (
    <div className="overflow-x-hidden h-screen">
      <div className="flex flex-col md:items-start mx-20 md:mx-32">
        <div className="flex flex-col items-center mt-32 md:items-start">
          <p className="text-3xl font-semibold text-[#004688]">About Us</p>
          <div className="bg-[#D72F24] w-12 h-1"></div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-10 my-20">
          <img src="/asset/png/percumian.png" className="md:w-1/2" />

          <div className="flex flex-col md:items-start">
            <p className="text-3xl font-semibold text-black">
              About Our Company
            </p>

            <p className="text-md font-normal text-black my-10 mr-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
