import Navbar from "@/components/navbar/Navbar";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import testCard from "../assets/1.png";
import { CircleX, Minus, Plus } from "lucide-react";

const Cart = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="pt-36 pb-16 text-6xl text-center">Your Cart</div>
      <div className="flex w-full flex-wrap gap-4 lg:flex-nowrap">
        <div className="lg:w-2/2 w-full">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>PRODUCT</TableHead>
                <TableHead>PRICE</TableHead>
                <TableHead>QUANTITY</TableHead>
                <TableHead className="text-right w-[10px]">REMOVE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium ">
                  <div className="flex items-center">
                    <div
                      alt="product image"
                      style={{ backgroundImage: `url(${testCard})` }}
                      className={`bg-contain bg-neutral-800 bg-no-repeat rounded-lg h-24 w-24 md:h-32 md:w-32 bg-center  group-hover:opacity-50  group-hover:scale-105 duration-200`}
                    />

                    <div className="px-4 line-clamp-1">Name Product Name Product Name Product Name Product Name </div>
                  </div>
                </TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <Plus className="scale-125 p-1 bg-primaryColor rounded cursor-pointer" />
                    <span>1</span>
                    <Minus className="scale-125 p-1 bg-primaryColor rounded cursor-pointer" />
                  </div>
                </TableCell>
                <TableCell className="place-items-end"><CircleX/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="lg:w-2/6 m-3 w-full bg-neutral-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>$250.00</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-semibold text-lg border-t pt-4 mt-4">
            <span>Total</span>
            <span>$250.00</span>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-primaryColor duration-300">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
