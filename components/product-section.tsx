"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PurchaseModal } from "@/components/purchase-modal"

const products = [
  {
    id: 1,
    name: "Tote-Ally Green Original",
    price: "35.000đ",
    image: "/images/tote-original.png",
  },
  {
    id: 2,
    name: "Tote-Ally Green Nón Lá",
    price: "35.000đ",
    image: "/images/tote-since-2025.png",
  },
  {
    id: 3,
    name: "Tote-Ally Green Việt Nam",
    price: "35.000đ",
    image: "/images/tote-vietnam.png",
  },
  {
    id: 4,
    name: "Tote-Ally Green Địa Cầu",
    price: "35.000đ",
    image: "/images/tote-earth.png",
  },
  {
    id: 5,
    name: "Tote-Ally Green Chibi",
    price: "35.000đ",
    image: "/images/tote-chibi.png",
  },
]

export function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePurchase = (product: (typeof products)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="products" className="py-20 product-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">DANH MỤC SẢN PHẨM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center text-gray-800">{product.name}</h3>
                <p className="text-red-500 font-bold text-xl text-center mb-4">{product.price}</p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 font-semibold py-2 transition-colors duration-200"
                  onClick={() => handlePurchase(product)}
                >
                  Mua ngay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <PurchaseModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
