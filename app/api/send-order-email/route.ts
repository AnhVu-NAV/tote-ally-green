import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Format nội dung email
    const htmlContent = `
      <h2>🛒 Đơn hàng mới</h2>
      <p><b>Sản phẩm:</b> ${data.productName}</p>
      <p><b>Giá:</b> ${data.productPrice}</p>
      <p><b>Số lượng:</b> ${data.quantity}</p>
      <p><b>Tổng tiền:</b> ${data.totalAmount}</p>
      <hr/>
      <p><b>Khách hàng:</b> ${data.customerName}</p>
      <p><b>Địa chỉ:</b> ${data.customerAddress}</p>
      <p><b>Số điện thoại:</b> ${data.customerPhone}</p>
    `

    // Gửi email
    await resend.emails.send({
      from: "System Toteallygreen <toteallygreen.system@resend.dev>", // đổi thành domain/email đã verify
      to: "toteallygreen.official@gmail.com",                 // email nhận đơn hàng
      subject: `Đơn hàng mới từ ${data.customerName}`,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
