 // This file is just for testing purposes
// You can use this to populate localStorage for testing

export const mockProducts = [
  {
    id: "prod_1",
    name: "Premium Wireless Headphones",
    price: 249.99,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "prod_2",
    name: "Ergonomic Office Chair",
    price: 349.99,
    quantity: 2,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "prod_3",
    name: "Smart Fitness Watch",
    price: 199.99,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200",
  },
]

// Run this in browser console to populate localStorage for testing:
// localStorage.setItem('cart', JSON.stringify(mockProducts))
