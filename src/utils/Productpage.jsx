import React from "react";
import Navbar from "../Component/Navbar";

function Productpage() {
  return (
    <div className="w-full bg-[#F4EBDA]">
      <Navbar />
      <div className="mx-10">
        <h1 className="text-xl font-semibold  ">ProducName</h1>
      </div>
      <div className="PARENTDIV w-full h-full  lg:flex p-5">
        <div className="LEFTPARENT h-[70vh] lg:h-[100vh]  lg:w-[50%] flex gap-5">
          <div className="w-[35vh] h-[10vh] lg:h-[100vh] lg:w-[25%]">
            <div className="w-full h-[20vh] border-2 border-[#838A60] lg:overflow-hidden lg:h-[30vh] mb-5  rounded-xl">
              <img
                className="w-full h-full object-cover rounded-xle"
                src="https://img.freepik.com/premium-photo/soda-jar-spray-bottle-vinegar-lemon-wooden-brush-sponge-beige-background-copy-space_531397-1765.jpg?w=996"
                alt=""
              />
            </div>
            <div className="w-full border-2 border-[#838A60] lg:overflow-hidden   h-[20vh] lg:h-[30vh] mb-5  rounded-xl">
              <img
                className="w-full h-full object-cover rounded-xle"
                src="https://img.freepik.com/premium-psd/top-view-mock-up-with-sweet-croissants_23-2148682277.jpg?w=996"
                alt=""
              />
            </div>
            <div className="w-full  border-2 border-[#838A60] lg:overflow-hidden  h-[20vh] lg:h-[30vh]  rounded-xl">
              <img
                className="w-full h-full object-cover rounded-xle"
                src="https://img.freepik.com/premium-psd/top-view-mock-up-with-pastries_23-2148682276.jpg?w=740"
                alt=""
              />
            </div>
          </div>
          <div className="w-[50vh] h-[65vh] lg:h-[96vh] lg:w-[70%] rounded-xl  border-2 border-[#838A60]">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="https://img.freepik.com/free-photo/beautycare-concept-with-palm-tree-leaf_23-2147817641.jpg?t=st=1717052881~exp=1717056481~hmac=ae36f07d8c38f585478817c0c7a01059bd655be7d3a4a91fd02657a936e2be8e&w=996"
              alt=""
            />
          </div>
        </div>

        <div className="RIGHTPARENT_details lg:w-[50%]  relative  p-10">
          <h1 className="text-3xl font-semibold mb-5  ">ProductName</h1>
          <h1 className="mb-5">Rating</h1>
          <p className="text-md tracking-tighter mb-5 font-semibold ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae assumenda ad incidunt ratione quia, harum deserunt
            molestiae quibusdam facere culpa! Sit suscipit illum quaerat modi
            atque adipisci distinctio quis. Molestias animi quod modi illum
            ducimus obcaecati labore tempore, ab provident?
          </p>
          <div className="flex gap-[40%]">
            <button className="px-16 rounded-xl py-3  mb-5 border-2 border-zinc-900">
              <span className="absolute hidden lg:block  text-xl top-[38.3%] left-[9%]">+</span>{" "}
              1{" "}
              <span className="absolute hidden lg:block text-xl top-[38.3%] left-[19%]">-</span>{" "}
            </button>
            <h1 className="text-xl font-bold">$10</h1>
          </div>

          <div className="flex items-center gap-5 mb-5">
            <button className="py-3 mt-4 px-[65px] rounded-xl bg-[#838A60]">
              <h3 className="text-sm text-white font-[poppins] font-bold ">
                Add To Cart
              </h3>
            </button>
            <button>Heart</button>
          </div>
          <a className="text-md font-medium underline" href="/catlog">
            Keep Shoping{" "}
          </a>
        </div>
      </div>

      <div className="flex flex-shrink-0">
        <div className="mx-10 w-full m ">
          <h1 className="text-2xl mb-5 font-semibold">Reviews</h1>
          <div className="w-[30%] mb-10 h-[30vh] hidden lg:block border-2 border-[#838A60]">
            <p className="p-5 text-sm font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              laboriosam vitae impedit illo praesentium autem fugiat accusantium
              non veniam distinctio? Eveniet, natus tenetur. Dolor, quasi
              adipisci dolores quidem explicabo nemo!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Productpage;
