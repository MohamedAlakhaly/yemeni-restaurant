import React from "react";
import testImg from "../assets/1.png";
import Navbar from "@/components/navbar/Navbar";
import {
  Check,
  Minus,
  Plus,
  ShoppingBag,
  ShoppingBasket,
  Star,
  Timer
} from "lucide-react";
const ShowProductDetails = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="flex flex-wrap pt-20 h-screen">
        {/* //? product image */}

        <div
          style={{ backgroundImage: `url(${testImg})` }}
          className="w-full h-80 md:h-96 lg:h-auto lg:w-1/2 bg-contain bg-center bg-no-repeat"
        />

        {/* //? product details */}
        <div className="w-full  self-center p-3 lg:w-1/2">
          {/* //todo product Name */}
          <div className="text-3xl font-semibold">Product Name</div>

          {/* //todo product description with count */}
          <div className="flex items-center py-4 justify-between">
            <div className="text-xl text-gray-400">Description</div>
            <div className="flex gap-4 bg-primaryColor p-2 rounded-full">
              <Plus className="hover:cursor-pointer" />
              <span>1</span>
              <Minus className="hover:cursor-pointer" />
            </div>
          </div>

          {/* //todo description */}
          <div className="text-gray-400 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            iste soluta, assumenda quaerat ullam quam animi esse fugit illum
            quasi maxime ducimus consequatur, sequi nulla dolorem tempora
            doloribus sunt iusto?
          </div>

          {/* //todo product reviews and time */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={28} />
              <span className="text-xl font-semibold">4.9</span>
            </div>

            <div className="flex items-center gap-2">
              <Timer className="text-primaryColor" size={28} />
              <span className="text-xl font-semibold">7-10 Min</span>
            </div>
          </div>

          {/* //todo Add to cart button */}

          <div className="my-4 flex justify-between bg-primaryColor px-7 rounded-full items-center">
            <div>
              <div className="text-lg">Price</div>
              <div className="text-xl font-semibold">$400</div>
            </div>

            <div className="md:flex">

            <div className="flex gap-3 m-1 justify-center items-center bg-black px-6 py-2 rounded-full hover:cursor-pointer">
              <span className="text-lg">Add to cart</span>
              <ShoppingBasket />
            </div>

            <div className="flex gap-3 m-1 items-center justify-center bg-black px-6 py-2 rounded-full hover:cursor-pointer">
              <span className="text-lg">Buy now</span>
              <Check />
            </div>

            </div>
            
          </div>

          {/* //todo reviews section */}
          
        </div>
      </main>
    </div>
  );
};

export default ShowProductDetails;
