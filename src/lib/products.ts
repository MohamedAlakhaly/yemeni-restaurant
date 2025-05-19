// Sample product data
export interface Product {
  id: number
  name: string
  price: number
  category: string
  time: string
  image: string
  isPopular?: boolean
  isNew?: boolean
  description?: string
  ingredients?: string[]
  nutritionalInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
}

export const products: Product[] = [
  {
    id: 1,
    name: "Spicy Miso Ramen",
    price: 14.99,
    category: "Ramen",
    time: "20 min",
    image: "/assets/1.png",
    isPopular: true,
    description:
      "A rich and spicy miso-based broth with tender slices of pork, soft-boiled egg, fresh vegetables, and handmade noodles.",
    ingredients: [
      "Miso paste",
      "Pork belly",
      "Soft-boiled egg",
      "Green onions",
      "Bean sprouts",
      "Nori",
      "Handmade noodles",
    ],
    nutritionalInfo: {
      calories: 550,
      protein: 28,
      carbs: 65,
      fat: 22,
    },
  },
  {
    id: 2,
    name: "Chicken Katsu Curry",
    price: 16.5,
    category: "Curry",
    time: "15 min",
    image: "/assets/1.png",
    isNew: true,
    description: "Crispy panko-breaded chicken cutlet served with our signature Japanese curry sauce and steamed rice.",
    ingredients: [
      "Chicken breast",
      "Panko breadcrumbs",
      "Japanese curry roux",
      "Carrots",
      "Potatoes",
      "Onions",
      "Steamed rice",
    ],
    nutritionalInfo: {
      calories: 680,
      protein: 32,
      carbs: 85,
      fat: 24,
    },
  },
  {
    id: 3,
    name: "Salmon Sushi Platter",
    price: 22.99,
    category: "Sushi",
    time: "10 min",
    image: "/assets/1.png",
    description:
      "Fresh, premium-grade salmon served over perfectly seasoned sushi rice. Includes nigiri, maki, and sashimi varieties.",
    ingredients: ["Fresh salmon", "Sushi rice", "Nori", "Wasabi", "Pickled ginger", "Soy sauce"],
    nutritionalInfo: {
      calories: 420,
      protein: 24,
      carbs: 60,
      fat: 10,
    },
  },
  {
    id: 4,
    name: "Beef Tepanyaki",
    price: 19.99,
    category: "Tepanyaki",
    time: "25 min",
    image: "/assets/1.png",
    isPopular: true,
    description:
      "Premium slices of marinated beef, grilled to perfection on our teppanyaki grill with seasonal vegetables.",
    ingredients: [
      "Premium beef",
      "Teppanyaki sauce",
      "Bell peppers",
      "Zucchini",
      "Onions",
      "Mushrooms",
      "Garlic butter",
    ],
    nutritionalInfo: {
      calories: 580,
      protein: 42,
      carbs: 25,
      fat: 35,
    },
  },
  {
    id: 5,
    name: "Chicken Teriyaki Donburi",
    price: 15.5,
    category: "Donburi",
    time: "15 min",
    image: "/assets/1.png",
    description:
      "Grilled chicken glazed with our house-made teriyaki sauce, served over a bowl of steamed rice with vegetables.",
    ingredients: ["Chicken thigh", "Teriyaki sauce", "Steamed rice", "Broccoli", "Carrots", "Sesame seeds"],
    nutritionalInfo: {
      calories: 520,
      protein: 30,
      carbs: 70,
      fat: 15,
    },
  },
  {
    id: 6,
    name: "Vegetable Yakisoba",
    price: 13.99,
    category: "Noodles",
    time: "12 min",
    image: "/assets/1.png",
    isNew: true,
    description: "Stir-fried noodles with a colorful medley of fresh vegetables in our special yakisoba sauce.",
    ingredients: [
      "Yakisoba noodles",
      "Cabbage",
      "Carrots",
      "Bell peppers",
      "Bean sprouts",
      "Yakisoba sauce",
      "Aonori flakes",
    ],
    nutritionalInfo: {
      calories: 450,
      protein: 12,
      carbs: 75,
      fat: 10,
    },
  },
  {
    id: 7,
    name: "Tonkotsu Ramen",
    price: 15.99,
    category: "Ramen",
    time: "18 min",
    image: "/assets/1.png",
    description:
      "Rich, creamy pork bone broth simmered for 12 hours, served with tender chashu pork, ajitama egg, and fresh toppings.",
    ingredients: [
      "Pork bone broth",
      "Chashu pork",
      "Ajitama egg",
      "Wood ear mushrooms",
      "Bamboo shoots",
      "Green onions",
      "Ramen noodles",
    ],
    nutritionalInfo: {
      calories: 590,
      protein: 32,
      carbs: 60,
      fat: 28,
    },
  },
  {
    id: 8,
    name: "Katsu Donburi",
    price: 14.5,
    category: "Donburi",
    time: "15 min",
    image: "/assets/1.png",
    description:
      "Crispy pork cutlet served over a bowl of steamed rice, topped with a sweet and savory sauce and a side of pickles.",
    ingredients: [
      "Pork loin",
      "Panko breadcrumbs",
      "Donburi sauce",
      "Steamed rice",
      "Egg",
      "Green onions",
      "Pickled radish",
    ],
    nutritionalInfo: {
      calories: 650,
      protein: 35,
      carbs: 80,
      fat: 22,
    },
  },
]

// Get product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id)
}

// Get related products (same category)
export const getRelatedProducts = (id: number, limit = 4): Product[] => {
  const product = getProductById(id)
  if (!product) return []

  return products.filter((p) => p.category === product.category && p.id !== id).slice(0, limit)
}
