"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ShoppingCart, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rotate-45 rounded-lg flex items-center justify-center">
              <div className="w-6 h-1.5 bg-white rounded-full rotate-90" />
              <div className="w-6 h-1.5 bg-white rounded-full absolute" />
            </div>
            <span className="font-bold text-xl">Cool Aid</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-foreground/80 hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-foreground/80 hover:text-foreground">
              Pricing
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-foreground">
              Contact
            </Link>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button>Sign In</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link href="#features" className="text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="#pricing" className="text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>
          <Button className="w-full">Sign In</Button>
        </div>
      </div>
    </nav>
  )
}

