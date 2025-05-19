import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface CustomButtonProps {
  link: string
}

export default function CustomButton({ link }: CustomButtonProps) {
  return (
    <Link
      href={link}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primaryColor px-6 py-3 font-medium text-black transition-all hover:bg-opacity-90 hover:shadow-lg"
    >
      <span className="mr-2">Explore Our Menu</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      <span className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-150"></span>
    </Link>
  )
}
