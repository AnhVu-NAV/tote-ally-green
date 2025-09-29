"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RegistrationSection() {
  const [formData, setFormData] = useState({ name: "", address: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)

    const emailData = {
      type: "consultation",
      customerName: formData.name.trim(),
      customerAddress: formData.address.trim(),
      customerPhone: formData.phone.trim(),
      message: formData.message.trim(),
      // (tuỳ chọn) customerEmail: "...",
    }

    try {
      const res = await fetch("/api/send-registration-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      })

      const json = await res.json()

      if (!res.ok) {
        const msg = json?.errors?.join(", ") || "Có lỗi xảy ra, vui lòng thử lại!"
        alert(msg)
      } else {
        alert("Đăng ký tư vấn thành công!")
        setFormData({ name: "", address: "", phone: "", message: "" })
      }
    } catch (err) {
      console.error(err)
      alert("Có lỗi xảy ra, vui lòng thử lại!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="register" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trang%20web-hlrUU2o1mbT4AfHdLomEerOMRH5k7z.png"
                alt="Tote-Ally Green Registration"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-600 text-center">ĐĂNG KÝ TƯ VẤN</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      inputMode="tel"
                      pattern="^(\+?84|0)\d{8,10}$"
                      title="Số điện thoại Việt Nam, ví dụ 098xxxxxxx hoặc +8498xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Nội dung muốn tư vấn</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1"
                      placeholder="Nhập nội dung bạn muốn được tư vấn..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="text-sm text-gray-600 mt-4">
                    Để lại thông tin để chúng tôi tư vấn cho bạn về sản phẩm phù hợp nhất
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? "Đang gửi..." : "ĐĂNG KÝ TƯ VẤN"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
