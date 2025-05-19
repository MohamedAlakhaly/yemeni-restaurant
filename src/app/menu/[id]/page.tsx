"use client"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getProductById, getRelatedProducts } from "@/app/lib/products"
import { addToCart, isFavorite, toggleFavorite, getCartItems } from "@/app/lib/localstorge"
import Navbar from "@/components/navbar/Navbar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Clock, Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ProductsCard from "@/components/card/ProductsCard"
import { toast } from "sonner"

export default function ProductDetails() {
  const params = useParams()
  const router = useRouter()
  const productId = Number(params!.id)

  const [product, setProduct] = useState(getProductById(productId))
  const [relatedProducts, setRelatedProducts] = useState(getRelatedProducts(productId))
  const [quantity, setQuantity] = useState(1)
  const [isFav, setIsFav] = useState(false)
  const [cartItems, setCartItems] = useState<Record<number, number>>({})

  // Load favorite status and cart items from localStorage
  useEffect(() => {
    if (product) {
      setIsFav(isFavorite(product.id))
      setCartItems(getCartItems())
    }
  }, [product])

  // If product not found, redirect to menu
  useEffect(() => {
    if (!product) {
      router.push("/menu")
    }
  }, [product, router])

  if (!product) {
    return null
  }

  const handleAddToCart = () => {
    const updatedCart = addToCart(product.id, quantity)
    setCartItems(updatedCart)

    toast("Added to cart!", {
      description: `${product.name} × ${quantity}`,
      duration: 2000,
    })
  }

  const handleFavoriteToggle = () => {
    const updatedFavorites = toggleFavorite(product.id)
    setIsFav(updatedFavorites.includes(product.id))

    toast(updatedFavorites.includes(product.id) ? "Added to favorites" : "Removed from favorites", {
      description: product.name,
      duration: 2000,
    })
  }

  const handleCartUpdate = (id: number, count: number) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: count,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={Object.values(cartItems).reduce((sum, count) => sum + count, 0)} />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 pb-16">
        {/* Back button */}
        <Button variant="ghost" className="mb-6 group" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Menu
        </Button>

        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-muted/30 border p-8 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full max-w-md h-auto object-contain"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isPopular && (
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  Popular
                </Badge>
              )}
              {product.isNew && (
                <Badge variant="secondary" className="bg-green-500 text-white">
                  New
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{product.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-muted-foreground ml-1">(4.0)</span>
              </div>
            </div>

            <p className="text-2xl font-bold mb-6">€{product.price.toFixed(2)}</p>

            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients?.map((ingredient, index) => (
                  <Badge key={index} variant="outline" className="bg-muted/50">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Nutritional info */}
            {product.nutritionalInfo && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Nutritional Information</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-muted/30 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold">{product.nutritionalInfo.calories}</p>
                    <p className="text-xs text-muted-foreground">Calories</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold">{product.nutritionalInfo.protein}g</p>
                    <p className="text-xs text-muted-foreground">Protein</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold">{product.nutritionalInfo.carbs}g</p>
                    <p className="text-xs text-muted-foreground">Carbs</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold">{product.nutritionalInfo.fat}g</p>
                    <p className="text-xs text-muted-foreground">Fat</p>
                  </div>
                </div>
              </div>
            )}

            {/* Add to cart */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex items-center border rounded-full overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-10 w-10"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-10 w-10"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button className="flex-1 gap-2" size="lg" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`h-12 w-12 rounded-full ${isFav ? "text-red-500" : ""}`}
                onClick={handleFavoriteToggle}
              >
                <Heart className={`h-5 w-5 ${isFav ? "fill-current" : ""}`} />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductsCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  time={product.time}
                  image={product.image}
                  isPopular={product.isPopular}
                  isNew={product.isNew}
                  cartCount={cartItems[product.id] || 0}
                  onCartUpdate={handleCartUpdate}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
