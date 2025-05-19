"use client"

import Navbar from "@/components/navbar/Navbar"
import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CircleX, Minus, Plus, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Define the product type
interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get cart items from localStorage
    const getCartFromLocalStorage = () => {
      if (typeof window !== "undefined") {
        const cart = localStorage.getItem("cart")
        return cart ? JSON.parse(cart) : []
      }
      return []
    }

    setCartItems(getCartFromLocalStorage())
    setIsLoading(false)
  }, [])

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Tax calculation (0% in this case)
  const tax = 0

  // Total calculation
  const total = subtotal + tax

  // Update quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))

    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  // Remove item from cart
  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  // Clear entire cart
  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cart")
  }

  if (isLoading) {
    return (
      <div className="h-screen">
        <Navbar />
        <div className="flex h-[80vh] items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen ">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-12 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Your Shopping Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center rounded-xl bg-card p-12 text-center shadow-md "
          >
            <ShoppingBag className="mb-4 h-24 w-24 text-gray-300" />
            <h2 className="mb-4 text-2xl font-semibold">Your cart is empty</h2>
            <p className="mb-8 text-gray-500 dark:text-gray-400">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link href="/products">
              <Button className="bg-primaryColor hover:bg-primaryColor/90">Continue Shopping</Button>
            </Link>
          </motion.div>
        ) : (
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full rounded-xl bg-white p-6 shadow-md dark:bg-gray-800 lg:w-2/3"
            >
              <div className="mb-4 flex justify-between">
                <h2 className="text-xl font-semibold">Shopping Cart ({cartItems.length} items)</h2>
                <Button
                  variant="ghost"
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                  onClick={clearCart}
                >
                  Clear All
                </Button>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50%]">PRODUCT</TableHead>
                      <TableHead>PRICE</TableHead>
                      <TableHead>QUANTITY</TableHead>
                      <TableHead className="text-right">ACTIONS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <AnimatePresence>
                      {cartItems.map((item) => (
                        <motion.tr
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="group border-b"
                        >
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-4">
                              <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100 md:h-32 md:w-32">
                                <Image
                                  src={item.image || "/placeholder.svg?height=128&width=128"}
                                  alt={item.name}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="line-clamp-2 text-base font-medium md:text-lg">{item.name}</h3>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">ID: {item.id}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-base font-semibold md:text-lg">${item.price.toFixed(2)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2 rounded-lg border p-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-md bg-gray-100 p-0 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-md bg-primaryColor p-0 text-white hover:bg-primaryColor/90"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                              onClick={() => removeItem(item.id)}
                            >
                              <CircleX className="h-5 w-5" />
                              <span className="sr-only">Remove item</span>
                            </Button>
                          </TableCell>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8 flex justify-between">
                <Link href="/products">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full rounded-xl bg-white p-6 shadow-md dark:bg-gray-800 lg:w-1/3"
            >
              <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-600 dark:text-gray-400">Tax</span>
                  <span className="font-medium">Free</span>
                </div>

                <div className="flex justify-between pt-4">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold text-primaryColor">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="mt-8 w-full bg-black py-6 text-lg font-semibold text-white transition-all duration-300 hover:bg-primaryColor">
                Proceed to Checkout
              </Button>

              <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>We accept all major credit cards and PayPal</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
