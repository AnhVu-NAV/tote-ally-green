"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/images/tote-logo.png" alt="Tote-Ally Green Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-green-600">Tote-Ally Green</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick("#about")} className="nav-link">
              Về chúng tôi
            </button>
            <button onClick={() => handleNavClick("#products")} className="nav-link">
              Sản phẩm
            </button>
            <button onClick={() => handleNavClick("#register")} className="nav-link">
              Đăng ký mua
            </button>
            <button onClick={() => handleNavClick("#contact")} className="nav-link">
              Liên hệ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick("#about")} className="nav-link text-left">
                Về chúng tôi
              </button>
              <button onClick={() => handleNavClick("#products")} className="nav-link text-left">
                Sản phẩm
              </button>
              <button onClick={() => handleNavClick("#register")} className="nav-link text-left">
                Đăng ký mua
              </button>
              <button onClick={() => handleNavClick("#contact")} className="nav-link text-left">
                Liên hệ
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
