"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Heart, ShoppingCart, Timer, Check, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/app/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { addToCart, updateCartQuantity, isFavorite, toggleFavorite } from "@/app/lib/localstorge"
import { toast } from "sonner"

interface ProductProps {
  id: number
  name: string
  price: number
  time: string
  image: string
  isPopular?: boolean
  isNew?: boolean
  cartCount: number
  onCartUpdate: (id: number, count: number) => void
}

const ProductsCard = ({ id, name, price, time, image, isPopular, isNew, cartCount, onCartUpdate }: ProductProps) => {
  const [isFav, setIsFav] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [showQuantity, setShowQuantity] = useState(false)
  const router = useRouter()

  // Load favorite status from localStorage
  useEffect(() => {
    setIsFav(isFavorite(id))
  }, [id])

  // Show quantity controls when item is in cart
  useEffect(() => {
    if (cartCount > 0) {
      setShowQuantity(true)
    }
  }, [cartCount])

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click
    const updatedFavorites = toggleFavorite(id)
    setIsFav(updatedFavorites.includes(id))

    toast(updatedFavorites.includes(id) ? "Added to favorites" : "Removed from favorites", {
      description: name,
      duration: 2000,
    })
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click
    setIsAdding(true)

    const updatedCart = addToCart(id)
    onCartUpdate(id, updatedCart[id] || 0)

    toast("Added to cart!", {
      description: `${name} × ${updatedCart[id]}`,
      duration: 2000,
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  const handleUpdateQuantity = (e: React.MouseEvent, newQuantity: number) => {
    e.stopPropagation() // Prevent card click

    const updatedCart = updateCartQuantity(id, newQuantity)
    onCartUpdate(id, updatedCart[id] || 0)

    if (newQuantity <= 0) {
      setShowQuantity(false)
    }
  }

  const handleCardClick = () => {
    router.push(`/menu/${id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative h-full rounded-xl overflow-hidden border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden bg-muted/30">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isPopular && (
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Popular
            </Badge>
          )}
          {isNew && (
            <Badge variant="secondary" className="bg-green-500 text-white">
              New
            </Badge>
          )}
        </div>

        {/* Favorite button */}
        <motion.div whileTap={{ scale: 0.85 }}>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleFavoriteClick}
            className={cn(
              "absolute top-2 right-2 h-8 w-8 rounded-full opacity-90 transition-all duration-300",
              isFav ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : "bg-background/80",
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isFav ? "filled" : "outline"}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Heart className={cn("h-4 w-4", isFav ? "fill-current" : "")} />
              </motion.div>
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2 min-h-[3.5rem] group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
          <Timer className="h-4 w-4" />
          <span className="text-sm">{time}</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold">€{typeof price === "number" ? price.toFixed(2) : price}</span>

          {showQuantity ? (
            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full"
                onClick={(e) => handleUpdateQuantity(e, cartCount - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center font-medium">{cartCount}</span>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full"
                onClick={(e) => handleUpdateQuantity(e, cartCount + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <motion.div whileTap={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <Button size="sm" className="rounded-full overflow-hidden" onClick={handleAddToCart} disabled={isAdding}>
                <AnimatePresence mode="wait">
                  {isAdding ? (
                    <motion.div
                      key="adding"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="flex items-center"
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Added
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="flex items-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProductsCard
