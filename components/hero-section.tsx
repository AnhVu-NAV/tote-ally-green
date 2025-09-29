"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trang%20web%20%282%29.png-3qCPYQeGJRqJSKh38qLoLf2xYynxF6.jpeg"
          alt="Tote-Ally Green Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance drop-shadow-lg">
          Một Chiếc Túi
          <br />
          Ngăn Hành Động Xanh
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md">
          Cùng chúng tôi bảo vệ môi trường với những chiếc túi vải thân thiện
        </p>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
          onClick={scrollToProducts}
        >
          Khám phá ngay
        </Button>
      </div>
    </section>
  )
}
