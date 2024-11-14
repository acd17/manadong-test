// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="LandingPage overflow-x-hidden">
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

      <div class="flex flex-row h-screen w-screen">
        <div class="flex flex-col items-start justify-center bg-[#F6D5D3] w-1/3">
          <div class="flex flex-col items-start mx-40">
            <p class="text-3xl font-bold text-[#D72F24]">Manadong</p>
            <p class="text-lg font-semibold text-black">
              is a Manado dish with a spicy
            </p>
            <p class="text-lg font-semibold text-black">
              and appetizing flavour
            </p>
          </div>

          <div class="flex flex-col items-start mt-10 mx-40 gap-3">
            <p class="text-3xl font-semibold text-[#D72F24]">
              #NikmatnyaGaPakeRibet
            </p>
            <button class="text-[#004688] border-2 border-[#004688] p-2 rounded-xl hover:bg-[#004688] hover:text-white">
              Order Now
            </button>
          </div>
        </div>

        <div class="flex w-full">
          <img src="/asset/png/percumian.png" />
        </div>
      </div>

      <div class="flex flex-col h-screen w-screen mx-40 my-28">
        <div class="flex flex-col items-start">
          <p class="text-3xl font-semibold text-[#004688]">Our Menu</p>
          <div class="bg-[#D72F24] w-12 h-1"></div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default App;
