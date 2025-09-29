"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Product {
  id: number
  name: string
  price: string
  image: string
}

interface PurchaseModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function PurchaseModal({ product, isOpen, onClose }: PurchaseModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    quantity: "1",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!product) return

    const emailData = {
      productName: product.name,
      productPrice: product.price,
      quantity: formData.quantity,
      customerName: formData.name,
      customerAddress: formData.address,
      customerPhone: formData.phone,
      totalAmount: `${Number.parseInt(formData.quantity) * 35000}đ`,
    }

    try {
      const response = await fetch("/api/send-order-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        alert("Đơn hàng đã được gửi thành công!")
        setFormData({ name: "", address: "", phone: "", quantity: "1" })
        onClose()
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại!")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Có lỗi xảy ra, vui lòng thử lại!")
    }
  }

  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-green-600">Mua ngay - {product.name}</DialogTitle>
        </DialogHeader>

        <div className="flex items-center space-x-4 mb-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="quantity">Số lượng</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="name">Họ và Tên</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="address">Địa chỉ</Label>
            <Input
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1"
              required
            />
          </div>

          <div className="text-sm text-gray-600">
            Tổng tiền:{" "}
            <span className="font-bold text-red-500">
              {(Number.parseInt(formData.quantity) * 35000).toLocaleString()}đ
            </span>
          </div>

          <div className="flex space-x-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Hủy
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
              Gửi đơn hàng
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
