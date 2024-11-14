// import logo from "./logo.svg";
import "./App.css";
import Item from "./component/Item";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Promotion from "./component/Promotion";
import Review from "./component/Review";
import Location from "./component/Location";
import DetailItem from "./component/DetailItem";
import React, { useState } from "react";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      image: "/asset/png/ayam rica.png",
      name: "Ayam Rica",
      desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
      harga: "Rp 40,000",
    },
    {
      image: "/asset/png/Cumi Hitam.png",
      name: "Cumi Hitam",
      desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
      harga: "Rp 30,000",
    },
    {
      image: "/asset/png/Cakalang Tinorasak.png",
      name: "Cakalang Tinorasak",
      desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
      harga: "Rp 35,000",
    },
    {
      image: "/asset/png/bakwan.png",
      name: "Perkedel Jagung",
      desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
      harga: "Rp 10,000",
    },
    {
      image: "/asset/png/Ayam Woku.png",
      name: "Ayam Woku",
      desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
      harga: "Rp 25,000",
    },
    {
      image: "/asset/png/bumbu.png",
      name: "Lauk Frozen",
      desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
      harga: "Rp 20,000",
    },
    {
      image: "/asset/png/cakalang cabe.png",
      name: "Cakalang Rabe",
      desc: "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
      harga: "Rp 35,000",
    },
  ];

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div class="LandingPage overflow-x-hidden">
      <Navbar />
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

      <div className="flex flex-col h-screen w-screen my-28">
        <div className="flex flex-col items-start mx-40">
          <p className="text-3xl font-semibold text-[#004688]">Our Menu</p>
          <div className="bg-[#D72F24] w-12 h-1"></div>
        </div>

        <div className="flex flex-col mx-40">
          <div className="flex flex-row gap-24 mt-10">
            {items.slice(0, 4).map((item, index) => (
              <div key={index} onClick={() => openPopup(item)}>
                <Item image={item.image} name={item.name} />
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-24 mt-10">
            {items.slice(4).map((item, index) => (
              <div key={index} onClick={() => openPopup(item)}>
                <Item image={item.image} name={item.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-10 items-center justify-center">
          <button className="text-[#004688] border-2 border-[#004688] p-2 rounded-xl hover:bg-[#004688] hover:text-white w-fit">
            Order Now
          </button>
        </div>
        {selectedItem && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg w-1/3">
              <DetailItem
                image={selectedItem.image}
                title={selectedItem.name}
                desc={selectedItem.desc}
                harga={selectedItem.harga}
              />
              <button
                onClick={closePopup}
                className="mt-5 text-[#004688] border-2 border-[#004688] p-2 rounded-xl hover:bg-[#004688] hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div class="flex flex-col h-screen w-screen">
        <div class=" bg-[#F6D5D3] w-full h-1/2 items-center justify-start flex flex-row">
          <div class="flex flex-col items-start mx-40 ">
            <p class="text-3xl font-semibold text-[#004688]">Promotion</p>
            <div class="bg-[#D72F24] w-12 h-1"></div>
          </div>
          <div class="flex flex-row gap-24 mx-40">
            <Promotion
              image="/asset/svg/buy2get1.svg"
              title="Buy 2 Get 1"
              desc="Buy 2 and get 1 free, applicable to select variants."
            />
            <Promotion
              image="/asset/jpeg/discount.jpeg"
              title="Discount 20%"
              desc="Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50,000"
            />
            <Promotion
              image="/asset/jpeg/bundle.jpeg"
              title="Bundle Deal"
              desc="Purchase Ayam Woku and Ayam Rica can save 30% on the total cost"
            />
          </div>
        </div>
        <div class=" bg-[#CBD9E6] w-full h-1/2 justify-start flex flex-col">
          <div class="flex flex-col items-start mx-40 my-10">
            <p class="text-3xl font-semibold text-[#004688]">Reviews</p>
            <div class="bg-[#D72F24] w-12 h-1"></div>
          </div>
          <div class="flex flex-row gap-10 mx-40">
            <Review
              name="Jennifer"
              desc="Such a good value for your money. Really good Manadonese food. Well recommended!"
            />
            <Review
              name="A*******a"
              desc="Cakalangnya terbaikkkkkkkk, the best cakalang everrr"
            />
            <Review
              name="Nadia"
              desc="Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggak masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deg tanggung jawab"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col w-screen h-screen gap-10">
        <div class="flex flex-col items-start mx-40 mt-20">
          <p class="text-3xl font-semibold text-[#004688]">Locations</p>
          <div class="bg-[#D72F24] w-12 h-1"></div>
        </div>
        <div class="flex flex-row gap-10 items-start mx-40">
          <Location
            location="Senopati, Petogogan"
            desc="Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan"
          />
          <Location
            location="Kebun Jeruk/Tanjung Duren"
            desc="Jl. Cipete Raya No. 1, RT.2/RW.3, Cipete Utara, Kebayoran Baru, Jakarta Selatan"
          />
          <Location
            location="Food Plaza PIK"
            desc="Jl. Sultan Iskandar Muda No.8, RT.1/RW.3, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan"
          />
        </div>
        <div class="flex flex-row gap-10 items-start mx-40">
          <Location
            location="Senopati, Petogogan"
            desc="Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cipaku I No.1, Petogogan, Jakarta Selatan"
          />
          <Location
            location="Kebun Jeruk/Tanjung Duren"
            desc="Jl. Cipete Raya No. 1, RT.2/RW.3, Cipete Utara, Kebayoran Baru, Jakarta Selatan"
          />
          <Location
            location="Food Plaza PIK"
            desc="Jl. Sultan Iskandar Muda No.8, RT.1/RW.3, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
