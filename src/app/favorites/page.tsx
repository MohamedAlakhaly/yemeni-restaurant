"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar/Navbar"
import { getFavorites, getCartItems } from "@/lib/localStorage"
import { products, type Product } from "@/lib/products"
import ProductsCard from "@/components/card/ProductsCard"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
  const [cartItems, setCartItems] = useState<Record<number, number>>({})
  const [isLoading, setIsLoading] = useState(true)

  // Load favorites and cart from localStorage
  useEffect(() => {
    const loadData = () => {
      const storedFavorites = getFavorites()
      setFavoriteIds(storedFavorites)

      const favProducts = products.filter((product) => storedFavorites.includes(product.id))
      setFavoriteProducts(favProducts)

      setCartItems(getCartItems())
      setIsLoading(false)
    }

    // Simulate loading
    setTimeout(loadData, 1000)
  }, [])

  // Handle cart updates
  const handleCartUpdate = (productId: number, quantity: number) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: quantity,
    }))
  }

  // Handle favorite removal
  const handleFavoriteRemoved = (removedId: number) => {
    setFavoriteProducts((prev) => prev.filter((product) => product.id !== removedId))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={Object.values(cartItems).reduce((sum, count) => sum + count, 0)} />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500 fill-red-500" />
              My Favorites
            </h1>
            <p className="text-muted-foreground mt-2">Your collection of favorite dishes</p>
          </div>

          <Link href="/menu">
            <Button variant="outline" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-muted mb-4"></div>
              <div className="h-4 w-32 bg-muted rounded mb-2"></div>
              <div className="h-3 w-24 bg-muted rounded"></div>
            </div>
          </div>
        ) : favoriteProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="bg-muted/30 p-6 rounded-full mb-6">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">No favorites yet</h2>
            <p className="text-muted-foreground max-w-md mb-8">
              You haven't added any items to your favorites yet. Browse our menu and click the heart icon to save your
              favorite dishes.
            </p>
            <Link href="/menu">
              <Button>Explore Menu</Button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {favoriteProducts.map((product) => (
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
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  )
}
