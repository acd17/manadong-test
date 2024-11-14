import React from "react";

function Navbar() {
  return (
    <nav class="border-gray-200 bg-[#004688]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="/asset/svg/logo.svg" class="h-10" />
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-[#004688] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#004688] ">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white bg-[#FABDB9] rounded md:bg-transparent md:text-[#FABDB9] md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:bg-[#FABDB9] md:hover:bg-transparent md:border-0 md:hover:text-[#FABDB9] md:p-0 dark:text-white md:dark:hover:text-[#FABDB9] dark:hover:bg-[#FABDB9] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Eatery
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:bg-[#FABDB9] md:hover:bg-transparent md:border-0 md:hover:text-[#FABDB9] md:p-0 dark:text-white md:dark:hover:text-[#FABDB9] dark:hover:bg-[#FABDB9] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:bg-[#FABDB9] md:hover:bg-transparent md:border-0 md:hover:text-[#FABDB9] md:p-0 dark:text-white md:dark:hover:text-[#FABDB9] dark:hover:bg-[#FABDB9] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
