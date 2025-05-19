"use client";
import { useState, useEffect } from "react";
import ProductsCard from "@/components/card/ProductsCard";
import Navbar from "@/components/navbar/Navbar";
import Tabbar from "@/components/navbar/Tabbar";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductSkeleton from "@/components/card/ProductSkeleton";
import { products } from "@/app/lib/products";
import { getCartItems } from "@/app/lib/localstorge";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

  // Load cart items from localStorage on mount
  useEffect(() => {
    const storedCartItems = getCartItems();
    setCartItems(storedCartItems);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle cart updates
  const handleCartUpdate = (productId: number, quantity: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  // Filter products based on selected category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "Popular" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        cartCount={Object.values(cartItems).reduce(
          (sum, count) => sum + count,
          0
        )}
      />
      <Tabbar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedCategory} Items
          </motion.h1>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-9 w-full"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {isLoading
          ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) =>
                <ProductSkeleton key={i} />
              )}
            </div>
          : filteredProducts.length === 0
            ? <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground text-lg">
                  No items found in this category.
                </p>
                <button
                  className="mt-4 text-primary hover:underline"
                  onClick={() => {
                    setSelectedCategory("Popular");
                    setSearchQuery("");
                  }}
                >
                  View all items
                </button>
              </motion.div>
            : <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredProducts.map(product =>
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
                )}
              </motion.div>}
      </div>
    </div>
  );
}
