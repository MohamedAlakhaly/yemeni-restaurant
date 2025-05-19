import { IceCreamCone, Coffee, Fish, Flame, Soup, Utensils, SoupIcon as Noodles } from "lucide-react"

interface tabbarProps {
  selectedCategory:string,
  onSelectCategory:Function
}
function Tabbar({ selectedCategory, onSelectCategory }:tabbarProps) {
  const categories = [
    { title: "Popular", icon: Flame },
    { title: "Curry", icon: IceCreamCone },
    { title: "Ramen", icon: Soup },
    { title: "Tepanyaki", icon: Utensils },
    { title: "Donburi", icon: Coffee },
    { title: "Sushi", icon: Fish },
    { title: "Noodles", icon: Noodles },
  ]

  return (
    <div className="w-full pt-16 md:pt-20 bg-background/95 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto overflow-x-auto hide-scrollbar">
        <div className="flex lg:justify-evenly gap-4 py-4 px-2 min-w-max">
          {categories.map((item, idx) => {
            const Icon = item.icon
            const isActive = selectedCategory === item.title

            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                  isActive ? "scale-105" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => onSelectCategory(item.title)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                    isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className={`h-8 w-8 ${isActive ? "text-primary" : ""}`} />
                </div>
                <span className={`text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tabbar
