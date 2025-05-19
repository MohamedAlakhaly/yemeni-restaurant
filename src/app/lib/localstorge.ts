"use client"

import type { Product } from "./products"

// Cart functions
export const getCartItems = (): Record<number, number> => {
  if (typeof window === "undefined") return {}

  const cartItems = localStorage.getItem("cartItems")
  return cartItems ? JSON.parse(cartItems) : {}
}

export const addToCart = (productId: number, quantity = 1): Record<number, number> => {
  const cartItems = getCartItems()
  const newQuantity = (cartItems[productId] || 0) + quantity

  const updatedCart = {
    ...cartItems,
    [productId]: newQuantity,
  }

  localStorage.setItem("cartItems", JSON.stringify(updatedCart))
  return updatedCart
}

export const removeFromCart = (productId: number): Record<number, number> => {
  const cartItems = getCartItems()
  const { [productId]: removed, ...updatedCart } = cartItems

  localStorage.setItem("cartItems", JSON.stringify(updatedCart))
  return updatedCart
}

export const updateCartQuantity = (productId: number, quantity: number): Record<number, number> => {
  const cartItems = getCartItems()

  let updatedCart
  if (quantity <= 0) {
    const { [productId]: removed, ...rest } = cartItems
    updatedCart = rest
  } else {
    updatedCart = { ...cartItems, [productId]: quantity }
  }

  localStorage.setItem("cartItems", JSON.stringify(updatedCart))
  return updatedCart
}

export const getCartTotal = (items: Record<number, number>, products: Product[]): number => {
  return Object.entries(items).reduce((total, [id, quantity]) => {
    const product = products.find((p) => p.id === Number(id))
    return total + (product?.price || 0) * quantity
  }, 0)
}

// Favorites functions
export const getFavorites = (): number[] => {
  if (typeof window === "undefined") return []

  const favorites = localStorage.getItem("favorites")
  return favorites ? JSON.parse(favorites) : []
}

export const toggleFavorite = (productId: number): number[] => {
  const favorites = getFavorites()

  let updatedFavorites
  if (favorites.includes(productId)) {
    updatedFavorites = favorites.filter((id) => id !== productId)
  } else {
    updatedFavorites = [...favorites, productId]
  }

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  return updatedFavorites
}

export const isFavorite = (productId: number): boolean => {
  const favorites = getFavorites()
  return favorites.includes(productId)
}
