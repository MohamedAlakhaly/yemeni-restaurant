"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Menu, ShoppingCart, Globe, Moon, Sun, Heart } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { ModeToggle } from "../Buttons/DarkThemeButton"

interface NavbarProps {
  cartCount?: number
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const [theme, setTheme] = useState("light")
  const [language, setLanguage] = useState("English")
  const pathname = usePathname()

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-16 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            className="w-10 h-10 group-hover:rotate-12 duration-300"
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <div className="text-xl font-bold hidden md:block ml-2">
            YEMENI <span className="text-primary">REST</span>AURANT
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={
                    isActive("/")
                      ? "text-base font-medium border-b-2 border-primary pb-1"
                      : "text-base text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/menu"
                  className={
                    isActive("/menu") || pathname!.startsWith("/menu/")
                      ? "text-base font-medium border-b-2 border-primary pb-1"
                      : "text-base text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  Menu
                </Link>
              </NavigationMenuItem>

              

              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={
                    isActive("/about")
                      ? "text-base font-medium border-b-2 border-primary pb-1"
                      : "text-base text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  About Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Action Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/favorites" className={isActive('/favorites')?'text-primaryColor':''}>
            <Button variant="outline" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/cart" className={isActive('/cart')?'text-primaryColor':''}>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                  {cartCount > 99 ? "99+" : cartCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Language Selector */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("Arabic")}>العربية</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("French")}>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Theme Toggle */}
          <ModeToggle/>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {/* Navigation Links Section */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/"
                    className={`w-full flex px-2 py-1.5 text-sm ${isActive("/") ? "font-medium text-primary" : "hover:text-primary duration-200"}`}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/menu"
                    className={`w-full flex px-2 py-1.5 text-sm ${isActive("/menu") || pathname!.startsWith("/menu/") ? "font-medium text-primary" : "hover:text-primary duration-200"}`}
                  >
                    Menu
                  </Link>
                </DropdownMenuItem>
              
                <DropdownMenuItem asChild>
                  <Link
                    href="/about"
                    className={`w-full flex px-2 py-1.5 text-sm ${isActive("/about") ? "font-medium text-primary" : "hover:text-primary duration-200"}`}
                  >
                    About Us
                  </Link>
                </DropdownMenuItem>

                
                

                <DropdownMenuSeparator />

                {/* Settings Section */}
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setLanguage(language === "English" ? "Arabic" : "English")}>
                  <Globe className="mr-2 h-4 w-4" />
                  <span>{language === "English" ? "العربية" : "English"}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleTheme}>
                  {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                  <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
